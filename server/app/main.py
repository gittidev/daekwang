# app/main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from app.routers import router
from app.database import Base, engine
from app.config import ENV
from app.init_admin import create_initial_admin
from app.schemas.response import BaseResponse
from app.constants.status_code import StatusCode

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# 전역 에러 핸들러
@app.exception_handler(HTTPException)
def http_exception_handler(request: Request, exc: HTTPException):
    # 에러 메시지 매핑
    error_messages = {
        404: "요청한 리소스를 찾을 수 없습니다.",
        401: "인증이 필요합니다.",
        403: "권한이 없습니다.",
    }
    
    message = error_messages.get(exc.status_code, str(exc.detail))  # 기본 메시지 처리

    # BaseResponse로 직접 반환
    return BaseResponse(
        success=False,
        message=message,
        data=None,
        code=exc.status_code
    )


# DB 테이블 자동 생성
Base.metadata.create_all(bind=engine)

# 운영 배포시에는 호출 안함
if ENV=="development":
    # 초기 관리자 계정 생성
    create_initial_admin()

# 라우터 등록
app.include_router(router)


@app.get("/", include_in_schema=False)
def root():
    return {"message": "FastAPI is running"}

@app.get("/api/ping")
def ping():
    return {  
        "success": True,
        "message": "pong",
        "data": {
            "message": "pong, 백엔드 연결확인!❤️"
        },
        "code": 200
        }