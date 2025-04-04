# app/init_admin.py
from app.database import SessionLocal
from app.services.admin import create_admin
from app.schemas.admin import AdminCreate
from app.models.admin import Admin
from app.config import INIT_ADMIN_USERNAME, INIT_ADMIN_PASSWORD

def create_initial_admin():
    db = SessionLocal()
    try:
        exists = db.query(Admin).first()
        if exists:
            print("✅ 관리자 계정이 이미 존재합니다. 생성을 건너뜁니다.")
            return

        if INIT_ADMIN_USERNAME and INIT_ADMIN_PASSWORD:
            admin_data = AdminCreate(
                username=INIT_ADMIN_USERNAME,
                password=INIT_ADMIN_PASSWORD
            )
            create_admin(db, admin_data)
            print("✅ 초기 관리자 계정 생성 완료!")
        else:
            print("❌ .env에 관리자 계정 정보가 없습니다.")
    finally:
        db.close()
