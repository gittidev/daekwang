from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.auth import get_current_admin 
from app.database import get_db  # DB 세션 의존성
from app.schemas.construction import ConstructionCreate, ConstructionAdminResponse
from app.services.construction import create_construction, get_constructions_list, get_construction, delete_construction, update_construction
from app.constants.status_code import StatusCode
from app.schemas.response import BaseResponse

router = APIRouter()

# 건설현장 생성 (관리자만 가능)
@router.post("/create", response_model=BaseResponse[ConstructionAdminResponse], description="관리자가 건설현장을 생성하는 API입니다. 건설현장의 정보를 등록합니다.")
def create_construction_site(
    construction_data: ConstructionCreate,
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)  # 관리자 인증 필수
):
    # 건설현장 생성 서비스 호출
    db_construction = create_construction(db, construction_data)

    if not db_construction:
        return BaseResponse(
            success=False,
            message="건설현장 생성 실패",
            data=None,
            code=StatusCode.INTERNAL_SERVER_ERROR 
        )
    
    return BaseResponse(
        success=True,
        message="건설현장이 성공적으로 등록되었습니다.",
        data=ConstructionAdminResponse.model_construct(**db_construction.__dict__),  # 모델로 변환
        code=StatusCode.SUCCESS
    )

# 건설현장 목록 조회
@router.get("/list", response_model=BaseResponse[list[ConstructionAdminResponse]],  description="등록된 모든 건설현장의 목록을 반환합니다. 페이지네이션이 적용됩니다.")
def list_constructions(
    skip: int = 0, 
    limit: int = 10,
    db: Session = Depends(get_db)
):
    constructions = get_constructions_list(db, skip, limit)
    return BaseResponse(
        success=True,
        message="건설현장 목록 조회 완료",
        data=[ConstructionAdminResponse.model_construct(**c.__dict__) for c in constructions],  
        code=StatusCode.SUCCESS
    )

# 특정 건설현장 조회
@router.get("/{construction_id}", response_model=BaseResponse[ConstructionAdminResponse])
def get_construction_details(
    construction_id: int,
    db: Session = Depends(get_db)
):
    construction = get_construction(db, construction_id)
    if not construction:
        raise HTTPException(status_code=404, detail="Construction not found")
    
    return BaseResponse(
        success=True,
        message="건설현장 조회 완료",
        data=ConstructionAdminResponse.model_construct(**construction.__dict__),  # 모델로 변환
        code=StatusCode.SUCCESS
    )

# 건설현장 삭제 (관리자만 가능)
@router.delete("/{construction_id}", response_model=BaseResponse[None])
def delete_construction_site(
    construction_id: int,
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)  # 관리자 인증 필수
):
    if not delete_construction(db, construction_id):
        raise HTTPException(status_code=404, detail="Construction not found")
    
    return BaseResponse(
        success=True,
        message="건설현장 삭제 완료",
        data=None,
        code=StatusCode.SUCCESS
    )

# 건설현장 업데이트 (관리자만 가능)
@router.put("/{construction_id}", response_model=BaseResponse[ConstructionAdminResponse],  description="지정된 건설현장의 정보를 업데이트합니다.")
def update_construction_site(
    construction_id: int,
    construction_data: ConstructionCreate,
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)  # 관리자 인증 필수
):
    updated_construction = update_construction(db, construction_id, construction_data)
    if not updated_construction:
        raise HTTPException(status_code=404, detail="Construction not found")
    
    return BaseResponse(
        success=True,
        message="건설현장 정보가 업데이트되었습니다.",
        data=ConstructionAdminResponse.model_construct(**updated_construction.__dict__),  # 모델로 변환
        code=StatusCode.SUCCESS
    )
