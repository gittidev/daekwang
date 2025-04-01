# 시공 사진 모델 (다대일 관계)
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.database import Base

class ConstructionImage(Base):
    __tablename__ = "construction_images"

    id = Column(Integer, primary_key=True, index=True)
    construction_id = Column(Integer, ForeignKey("constructions.id", ondelete="CASCADE"))
    image_url = Column(String, nullable=False)                  # 실제 이미지 경로
    uploaded_at = Column(DateTime, server_default=func.now())   # 업로드 일시
