from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.construction import ConstructionCreate, ConstructionAdminResponse
from app.services import construction_service

router = APIRouter(prefix="/constructions", tags=["시공"])

@router.post("/", response_model=ConstructionAdminResponse)
def create_construction(data: ConstructionCreate, db: Session = Depends(get_db)):
    return construction_service.create_construction_service(db, data)

@router.get("/{construction_id}", response_model=ConstructionAdminResponse)
def get_construction(construction_id: int, db: Session = Depends(get_db)):
    return construction_service.get_construction_service(db, construction_id)
