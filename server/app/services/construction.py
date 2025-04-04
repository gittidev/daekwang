from sqlalchemy.orm import Session
from app.models.construction import Construction
from app.schemas.construction import ConstructionCreate

# 건설현장을 생성하는 함수
def create_construction(db: Session, construction_data: ConstructionCreate):
    # 새로운 건설현장 객체를 DB에 추가
    db_construction = Construction(
        place=construction_data.place,
        period=construction_data.period,
        description=construction_data.description,
        is_published=construction_data.is_published,
        thumbnail=construction_data.thumbnail,
        total_price=construction_data.total_price,
    )
    # DB 세션에 추가하고 커밋
    db.add(db_construction)
    db.commit()
    # DB 객체 새로고침
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
def update_construction(db: Session, construction_id: int, construction_data: ConstructionCreate):
    # ID로 건설현장 찾기
    construction = db.query(Construction).filter(Construction.id == construction_id).first()
    if construction:
        # 건설현장 데이터 업데이트
        construction.place = construction_data.place
        construction.period = construction_data.period
        construction.description = construction_data.description
        construction.is_published = construction_data.is_published
        construction.thumbnail = construction_data.thumbnail
        construction.total_price = construction_data.total_price
        # DB에 커밋
        db.commit()
        db.refresh(construction)
        return construction
