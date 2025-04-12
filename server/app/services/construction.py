from sqlalchemy.orm import Session
from app.services.firebase_service import upload_to_firebase
from fastapi import UploadFile
from app.models.construction import Construction
from app.schemas.construction import ConstructionCreate

# 건설현장을 생성하는 함수
def create_construction(
    db: Session,
    construction_data: ConstructionCreate,
    file: UploadFile = None  # 👈 이미지가 있을 때만 업로드
):
    image_url = upload_to_firebase(file) if file else construction_data.thumbnail

    db_construction = Construction(
        place=construction_data.place,
        period=construction_data.period,
        description=construction_data.description,
        is_published=construction_data.is_published,
        thumbnail=image_url,  # 👈 자동으로 Firebase URL or 기존값
        total_price=construction_data.total_price,
    )
    db.add(db_construction)
    db.commit()
    db.refresh(db_construction)
    return db_construction

# 건설현장 목록을 가져오는 함수 (페이징 처리)
def get_constructions_list(db: Session, skip: int = 0, limit: int = 10):
    # 주어진 범위로 건설현장 리스트 반환
    return db.query(Construction).offset(skip).limit(limit).all()

# 특정 건설현장을 ID로 조회하는 함수
def get_construction(db: Session, construction_id: int):
    # ID로 건설현장 하나 반환
    return db.query(Construction).filter(Construction.id == construction_id).first()

# 특정 건설현장을 삭제하는 함수
def delete_construction(db: Session, construction_id: int):
    # 건설현장 찾기
    construction = db.query(Construction).filter(Construction.id == construction_id).first()
    if construction:
        # 건설현장 삭제하고 커밋
        db.delete(construction)
        db.commit()
        return True
    return False

# 특정 건설현장을 업데이트하는 함수
def update_construction(
    db: Session,
    construction_id: int,
    construction_data: ConstructionCreate,
    file: UploadFile = None
):
    construction = db.query(Construction).filter(Construction.id == construction_id).first()
    if construction:
        image_url = upload_to_firebase(file) if file else construction_data.thumbnail

        construction.place = construction_data.place
        construction.period = construction_data.period
        construction.description = construction_data.description
        construction.is_published = construction_data.is_published
        construction.thumbnail = image_url
        construction.total_price = construction_data.total_price

        db.commit()
        db.refresh(construction)
        return construction
