# app/main.py
from fastapi import FastAPI
from app.routers import construction
from app.database import Base, engine
from app.models import construction as construction_model

app = FastAPI()

# DB 테이블 자동 생성
Base.metadata.create_all(bind=engine)

# 라우터 등록
app.include_router(construction.router)

@app.get("/")
def root():
    return {"message": "FastAPI 시공 프로젝트 🎉"}
