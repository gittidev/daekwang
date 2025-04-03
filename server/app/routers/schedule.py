from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import date
from uuid import uuid4

router = APIRouter()

# 가상의 메모리 DB
FAKE_SCHEDULE_DB = []

# 일정 모델
class Schedule(BaseModel):
    id: str
    title: str
    date: date
    description: Optional[str] = None

class ScheduleCreate(BaseModel):
    title: str
    date: date
    description: Optional[str] = None

@router.get("/", response_model=List[Schedule])
def get_schedules():
    return FAKE_SCHEDULE_DB

@router.post("/", response_model=Schedule)
def create_schedule(schedule: ScheduleCreate):
    new_schedule = Schedule(id=str(uuid4()), **schedule.dict())
    FAKE_SCHEDULE_DB.append(new_schedule)
    return new_schedule

@router.delete("/{schedule_id}")
def delete_schedule(schedule_id: str):
    global FAKE_SCHEDULE_DB
    original_len = len(FAKE_SCHEDULE_DB)
    FAKE_SCHEDULE_DB = [s for s in FAKE_SCHEDULE_DB if s.id != schedule_id]
    if len(FAKE_SCHEDULE_DB) == original_len:
        raise HTTPException(status_code=404, detail="일정을 찾을 수 없습니다.")
    return {"message": "삭제 완료"}
