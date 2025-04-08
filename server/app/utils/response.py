# app/utils/response.py

from fastapi.responses import JSONResponse
from app.schemas.response import BaseResponse
from app.constants.status_code import StatusCode
from typing import Any

def success_response(data: Any, message: str = "요청 성공", code: int = StatusCode.SUCCESS) -> JSONResponse:
    return JSONResponse(content=BaseResponse(
        success=True,
        message=message,
        data=data,
        code=code
    ).dict(),
    status_code=code )

def error_response(message: str = "요청 실패", code: int = StatusCode.INTERNAL_SERVER_ERROR) -> JSONResponse:
    return JSONResponse(content=BaseResponse(
        success=False,
        message=message,
        data=None,
        code=code
    ).dict(),
    status_code=code )
