from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db  # DB 세션 의존성
from app.schemas.construction import  ConstructionAdminResponse
from app.services.construction import  get_constructions_list, get_construction
from app.constants.status_code import StatusCode
from app.schemas.response import APIResponse

router = APIRouter()

# 건설현장 목록 조회
@router.get("/list", response_model=APIResponse[list[ConstructionAdminResponse]],  description="등록된 모든 건설현장의 목록을 반환합니다. 페이지네이션이 적용됩니다.")
def list_constructions(
    skip: int = 0, 
    limit: int = 10,
    db: Session = Depends(get_db)
):
    constructions = get_constructions_list(db, skip, limit)
    return APIResponse(
        success=True,
        message="건설현장 목록 조회 완료",
        data=[ConstructionAdminResponse.model_construct(**c.__dict__) for c in constructions],  
        code=StatusCode.SUCCESS
    )

# 특정 건설현장 조회
@router.get("/{construction_id}", response_model=APIResponse[ConstructionAdminResponse])
def get_construction_details(
    construction_id: int,
    db: Session = Depends(get_db)
):
    construction = get_construction(db, construction_id)
    if not construction:
        raise HTTPException(status_code=404, detail="Construction not found")
    
    return APIResponse(
        success=True,
        message="건설현장 조회 완료",
        data=ConstructionAdminResponse.model_construct(**construction.__dict__),  # 모델로 변환
        code=StatusCode.SUCCESS
    )

