# app/database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# SQLite DB 주소: 현재 디렉토리에 db.sqlite3라는 파일을 만들 거예요
SQLALCHEMY_DATABASE_URL = "sqlite:///./db.sqlite3"

# SQLite는 connect_args 필요
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# 세션 생성기 (데이터 조작할 때 필요 // DB와의 연결이자, 데이터를 조회/수정/저장하는 트랜잭션 단위)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 모델 클래스가 상속받을 Base
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()