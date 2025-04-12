# app/main.py
import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import HTTPException
from app.routers import router
from app.database import Base, engine, get_db
from app.config import ENV
from sqlalchemy.orm import Session
from app.schemas.response import BaseResponse
from app.schemas.admin import AdminCreate
from app.services.admin import create_admin
from app.models.admin import Admin

app = FastAPI()

# ✅ CORS 설정
origins = ["https://daekwang.site"]
if os.environ.get("ENV") != "production":
    origins.append("http://localhost:3000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ 전역 예외 처리
@app.exception_handler(HTTPException)
def http_exception_handler(request: Request, exc: HTTPException):
    error_messages = {
        404: "요청한 리소스를 찾을 수 없습니다.",
        401: "인증이 필요합니다.",
        403: "권한이 없습니다.",
    }
    message = error_messages.get(exc.status_code, str(exc.detail))
    return BaseResponse(
        success=False,
        message=message,
        data=None,
        code=exc.status_code
    )

# ✅ DB 테이블 자동 생성
Base.metadata.create_all(bind=engine)

# ✅ 최초 관리자 자동 생성
def create_initial_admin():
    if os.environ.get("ENV") == "production":
        return  # 운영 환경에서는 자동 생성 안 함

    username = os.environ.get("INIT_ADMIN_USERNAME")
    password = os.environ.get("INIT_ADMIN_PASSWORD")
    allowed = os.environ.get("ALLOWED_ADMIN_EMAIL", "").split(",")

    if not username or not password:
        print("⚠️ INIT_ADMIN_USERNAME 또는 PASSWORD 환경변수가 누락되었습니다.")
        return

    if username not in allowed:
        print("⚠️ INIT_ADMIN_USERNAME이 ALLOWED_ADMIN_EMAIL에 포함되어야 합니다.")
        return

    try:
        db: Session = next(get_db())
        existing = db.query(Admin).filter_by(username=username).first()
        if not existing:
            create_admin(db, AdminCreate(username=username, password=password))
            print(f"✅ 초기 관리자 계정({username})이 생성되었습니다.")
        else:
            print("ℹ️ 관리자 계정이 이미 존재합니다. 생성 생략.")
    except Exception as e:
        print(f"❌ 관리자 생성 중 오류 발생: {e}")

# ✅ 관리자 생성 호출
create_initial_admin()

# ✅ 라우터 등록
app.include_router(router, prefix="/api")

# ✅ 기본 라우터
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
