# tests/test_construction_service.py

from app.schemas.construction import ConstructionCreate
from server.app.services.construction import create_construction_service

def test_create_construction(db):
    # given
    data = ConstructionCreate(
        place="서울 강남",
        period="2024.04~2024.05",
        description="아파트 리모델링",
        is_published=True,
        total_price=15000000,
        thumbnail=None
    )

    # when
    result = create_construction_service(db, data)

    # then
    assert result.id is not None
    assert result.place == "서울 강남"
    assert result.total_price == 15000000
