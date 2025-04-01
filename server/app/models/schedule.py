# 시공 일정 캘린더 모델
from sqlalchemy import Column, Integer, String, Date, ForeignKey
from app.database import Base

class Schedule(Base):
    __tablename__ = "schedules"

    id = Column(Integer, primary_key=True, index=True)
    construction_id = Column(Integer, ForeignKey("constructions.id", ondelete="CASCADE"))
    title = Column(String, nullable=False)         # 일정 제목
    start_date = Column(Date, nullable=False)      # 시작일
    end_date = Column(Date, nullable=False)        # 종료일
    description = Column(String)                   # 설명