# app/routers/admin_auth.py

from fastapi import APIRouter, Form, Response, HTTPException
from fastapi.responses import JSONResponse
from .admin_accounts import DUMMY_ADMINS
import secrets

router = APIRouter(prefix="/api/admin", tags=["Admin Auth"])

@router.post("/login")
def admin_login(username: str = Form(...), password: str = Form(...), response: Response = None):
    if username not in DUMMY_ADMINS or DUMMY_ADMINS[username] != password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # 더 안전하게 할 경우 JWT 발급 등 고려
    token = secrets.token_hex(16)
    response = JSONResponse(content={"message": "로그인 성공"})
    response.set_cookie(key="admin_token", value=token, httponly=True, max_age=60*60*6)

    return response
