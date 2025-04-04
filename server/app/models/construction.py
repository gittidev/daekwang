from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime
from sqlalchemy.orm import declarative_base
from datetime import datetime

Base = declarative_base()

class Construction(Base):
    __tablename__ = "constructions"

    id = Column(Integer, primary_key=True, index=True)
    place = Column(String, index=True)
    period = Column(String)
    description = Column(Text)
    is_published = Column(Boolean, default=False)
    thumbnail = Column(String, nullable=True)
    total_price = Column(Float, nullable=True)
    created_at = Column(DateTime, default=datetime.now)
