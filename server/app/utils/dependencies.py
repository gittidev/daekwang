from fastapi import Depends, HTTPException, Request
from app.services.token import decode_token
from app.constants.status_code import StatusCode

def require_admin(request: Request):
    auth = request.headers.get("Authorization")
    if not auth or not auth.startswith("Bearer "):
        raise HTTPException(status_code=StatusCode.UNAUTHORIZED, detail="인증 토큰 누락")

    token = auth.replace("Bearer ", "")
    payload = decode_token(token)
    
    if not payload or not payload.get("is_admin"):
        raise HTTPException(status_code=StatusCode.FORBIDDEN, detail="관리자 권한 없음")
    
    return payload.get("sub")
