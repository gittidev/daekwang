# 시공 내역 모델
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Construction(Base):
    __tablename__ = "constructions"

    id = Column(Integer, primary_key=True, index=True)
    place = Column(String, nullable=False)                      # 시공 장소
    period = Column(String, nullable=False)                     # 시공 기간 (예: "2024.03 ~ 2024.04")
    description = Column(Text)                                  # 설명
    is_published = Column(Boolean, default=False)               # 공개 여부
    total_price = Column(Integer, nullable=True)                # 매출 금액 (선택)
    thumbnail = Column(String, nullable=True)                   # 썸네일 이미지 경로 (선택)
    created_at = Column(DateTime, server_default=func.now())    # 생성일시
