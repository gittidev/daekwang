# app/services/auth.py
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from app.config import SECRET_KEY, ALGORITHM


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/admin/login")

def get_current_admin(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        is_admin = payload.get("is_admin", False)

        if not username:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        if not is_admin:
            raise HTTPException(status_code=403, detail="관리자 권한이 필요합니다.")
        
        return username
    except JWTError:
        raise HTTPException(status_code=401, detail="Token is invalid or expired")
