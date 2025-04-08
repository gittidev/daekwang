from fastapi import APIRouter, Depends, HTTPException, Body, Request
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.admin import AdminCreate, AdminLogin
from app.schemas.token import TokenResponse
from app.services.admin import create_admin, authenticate_admin, create_access_token, create_refresh_token
from app.services.token import create_access_token, create_refresh_token, decode_token
from app.schemas.response import BaseResponse
from app.constants.status_code import StatusCode
from fastapi.security import OAuth2PasswordRequestForm
from app.config import ACCESS_TOKEN_EXPIRE_MINUTES
from app.utils.exceptions import UnauthorizedException
from app.utils.response import success_response


router = APIRouter()

# 관리자 생성용/ 개발자 계정 생성용 API
@router.post("/dev/create-admin")
def create_dev_admin(db: Session = Depends(get_db)):
    admin_data = AdminCreate(username="admin", password="1234")
    admin = create_admin(db, admin_data)
    return {
        "message": "✅ 관리자 계정 생성 완료",
        "username": admin.username
    }

@router.post("/login", response_model=BaseResponse[TokenResponse])
def login(admin_data: AdminLogin, db: Session = Depends(get_db)):
    admin = authenticate_admin(db, admin_data.username, admin_data.password)
    if not admin:
        raise UnauthorizedException(detail="잘못된 사용자 이름 또는 비밀번호입니다.")

    access_token = create_access_token({"sub": admin.username,"is_admin": True})
    refresh_token = create_refresh_token({"sub": admin.username, "is_admin": True})

    response = success_response(
            data={"access_token": access_token,   
                "token_type": "bearer",
                "expires_in": ACCESS_TOKEN_EXPIRE_MINUTES * 60},
            message="로그인 성공"
        )
    

    # ✅ 쿠키에 토큰 저장
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,  # JavaScript에서 접근 못함
        max_age=60 * 60 * 24 * 30,  # 30일
        secure=False,  # 배포 환경에서는 True로 (HTTPS)
        samesite="lax"
    )

    return response


@router.post("/refresh", response_model=BaseResponse[TokenResponse],
               responses={
        401: {
            "description": "인증 실패: 리프레시 토큰 없음 또는 유효하지 않음",
            "content": {
                "application/json": {
                    "example": {
                        "success": False,
                        "message": "Refresh token not found",
                        "data": None,
                        "code": 401  # UNAUTHORIZED
                    }
                }
            }
        }
    })

def refresh_token(request: Request):
    refresh_token = request.cookies.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=StatusCode.UNAUTHORIZED, detail="Refresh token not found")

    username = decode_token(refresh_token)

    if not username:
        raise HTTPException(status_code=StatusCode.UNAUTHORIZED, detail="Invalid refresh token")

    new_access_token = create_access_token({"sub": username})

    return BaseResponse(
        success=True,
        message="토큰 재발급 완료",
        data=TokenResponse(
            access_token=new_access_token,
            token_type="bearer",
            expire_in= ACCESS_TOKEN_EXPIRE_MINUTES * 60
        ),
        code=StatusCode.SUCCESS

    )


@router.post("/logout", response_model=BaseResponse)
def logout(response: JSONResponse):
    # 쿠키에서 refresh_token 삭제
    response.delete_cookie("refresh_token")

    return BaseResponse(
        success=True,
        message="로그아웃 성공",
        data=None,
        code=StatusCode.SUCCESS
    )