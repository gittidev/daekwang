# 📁 server/app/constants/status_code.py
from enum import IntEnum

class StatusCode(IntEnum):
    SUCCESS = 200
    UNAUTHORIZED = 401
    FORBIDDEN = 403
    NOT_FOUND = 404
    INTERNAL_SERVER_ERROR = 500
    # 필요에 따라 커스텀 코드
    INVALID_REFRESH_TOKEN = 4401
    EXPIRED_REFRESH_TOKEN = 4402
