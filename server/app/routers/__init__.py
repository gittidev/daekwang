from fastapi import APIRouter
from .auth import admin_auth_router
from .construction import router as construction_router
from .schedule import router as schedule_router

router = APIRouter()

# auth
router.include_router(admin_auth_router, prefix="/admin", tags=["Admin Auth"])

# 다른 도메인 라우터들
router.include_router(construction_router, prefix="/construction", tags=["Construction"])
router.include_router(schedule_router, prefix="/schedule", tags=["Schedule"])
