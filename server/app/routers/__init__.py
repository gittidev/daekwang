from fastapi import APIRouter
from .admin import router as admin_auth_router
from .construction import router as construction_router
from .admin_construction import router as admin_construction_router
from .schedule import router as schedule_router

router = APIRouter()

# auth
router.include_router(admin_auth_router, prefix="/admin", tags=["Admin Auth"])

#관리자 권한 필요
router.include_router(admin_construction_router, prefix="/admin/constructions", tags=["Admin Construction"])
# 다른 도메인 라우터들
router.include_router(construction_router, prefix="/constructions", tags=["Construction"])
router.include_router(schedule_router, prefix="/schedule", tags=["Schedule"])
