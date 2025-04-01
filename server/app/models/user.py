# 관리자 계정 모델
from sqlalchemy import Column, Integer, String
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)  # 로그인용 아이디
    hashed_password = Column(String, nullable=False)        # 암호화된 비밀번호
