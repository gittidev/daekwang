from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.auth import get_current_admin 
from app.database import get_db  # DB 세션 의존성
from app.schemas.construction import ConstructionCreate, ConstructionAdminResponse
from app.services.construction import create_construction, get_constructions_list, get_construction, delete_construction, update_construction
from app.constants.status_code import StatusCode
from app.schemas.response import APIResponse
from typing import List
from fastapi import UploadFile, File, Form

router = APIRouter()


# 1) 리스트 목록조회
@router.get(
    "/",
    response_model=APIResponse[List[ConstructionAdminResponse]],
    description="관리자 대시보드용 시공 목록 조회"
)
def read_constructions(
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)
):
    constructions = get_constructions_list(db)
    # services에서 ORM 객체 리스트를 반환한다고 가정
    payload = [
        ConstructionAdminResponse.model_construct(**c.__dict__)
        for c in constructions
    ]
    resp = APIResponse(
        success=True,
        message="시공 목록 조회 성공",
        data=payload,
        code=StatusCode.SUCCESS
    )
    return resp.dict()

# 건설현장 생성 (관리자만 가능)
@router.post("/create", response_model=APIResponse[ConstructionAdminResponse], description="관리자가 건설현장을 생성하는 API입니다. 건설현장의 정보를 등록합니다.")
async def create_construction_site(
    place: str = Form(...),
    period: str = Form(...),
    description: str = Form(...),
    is_published: bool = Form(...),
    total_price: float = Form(None),
    file: UploadFile = File(None),  # 👈 이미지 선택은 선택사항
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)
):
    construction_data = ConstructionCreate(
        place=place,
        period=period,
        description=description,
        is_published=is_published,
        total_price=total_price,
    )

    db_construction = create_construction(db, construction_data, file)

    if not db_construction:
        return APIResponse(
            success=False,
            message="건설현장 생성 실패",
            data=None,
            code=StatusCode.INTERNAL_SERVER_ERROR
        )

    return APIResponse(
        success=True,
        message="건설현장이 성공적으로 등록되었습니다.",
        data=ConstructionAdminResponse.model_construct(**db_construction.__dict__),
        code=StatusCode.SUCCESS
    )



# 건설현장 삭제 (관리자만 가능)
@router.delete("/{construction_id}", response_model=APIResponse[None])
def delete_construction_site(
    construction_id: int,
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)  # 관리자 인증 필수
):
    if not delete_construction(db, construction_id):
        raise HTTPException(status_code=404, detail="Construction not found")
    
    return APIResponse(
        success=True,
        message="건설현장 삭제 완료",
        data=None,
        code=StatusCode.SUCCESS
    )

# 건설현장 업데이트 put(관리자만 가능)
@router.put("/{construction_id}", response_model=APIResponse[ConstructionAdminResponse], description="지정된 건설현장의 정보를 업데이트합니다.")
async def update_construction_site(
    construction_id: int,
    place: str = Form(...),
    period: str = Form(...),
    description: str = Form(...),
    is_published: bool = Form(...),
    total_price: float = Form(None),
    file: UploadFile = File(None),
    db: Session = Depends(get_db),
    admin_user: str = Depends(get_current_admin)
):
    construction_data = ConstructionCreate(
        place=place,
        period=period,
        description=description,
        is_published=is_published,
        total_price=total_price,
    )

    updated = update_construction(db, construction_id, construction_data, file)
    if not updated:
        raise HTTPException(status_code=404, detail="Construction not found")

    return APIResponse(
        success=True,
        message="건설현장 정보가 업데이트되었습니다.",
        data=ConstructionAdminResponse.model_construct(**updated.__dict__),
        code=StatusCode.SUCCESS
    )
