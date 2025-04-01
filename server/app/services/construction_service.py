from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.repositories import construction_repo
from app.schemas.construction import ConstructionCreate

def create_construction_service(db: Session, data: ConstructionCreate):
    try:
        construction = construction_repo.create_construction(db, data.model_dump())
        db.commit()
        db.refresh(construction)
        return construction
    except Exception:
        db.rollback()
        raise HTTPException(status_code=500, detail="시공 생성 중 오류 발생")

def get_construction_service(db: Session, construction_id: int):
    construction = construction_repo.get_construction_by_id(db, construction_id)
    if not construction:
        raise HTTPException(status_code=404, detail="시공 정보 없음")
    return construction
