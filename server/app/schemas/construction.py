from pydantic import BaseModel
from typing import Optional
from datetime import datetime

# 기본 필드 정의 (공통)
class ConstructionBase(BaseModel):
    place: str
    period: str
    description: str
    is_published: bool
    thumbnail: Optional[str] = None

# 생성 요청 시 사용 (요청에는 id 없음)
class ConstructionCreate(ConstructionBase):
    total_price: Optional[int] = None

# 일반 사용자 응답용 (금액 X)
class ConstructionPublicResponse(ConstructionBase):
    id: int
    created_at: datetime

# 관리자 응답용 (금액 O)
class ConstructionAdminResponse(ConstructionPublicResponse):
    total_price: Optional[int] = None
