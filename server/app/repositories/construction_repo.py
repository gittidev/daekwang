from sqlalchemy.orm import Session
from app.models.construction import Construction

def create_construction(db: Session, data: dict) -> Construction:
    construction = Construction(**data)
    db.add(construction)
    return construction

def get_construction_by_id(db: Session, construction_id: int) -> Construction:
    return db.query(Construction).filter(Construction.id == construction_id).first()
