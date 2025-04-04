from fastapi import HTTPException

class NotFoundException(HTTPException):
    def __init__(self, detail: str = "해당 리소스를 찾을 수 없습니다."):
        super().__init__(status_code=404, detail=detail)

class UnauthorizedException(HTTPException):
    def __init__(self, detail: str = "인증이 필요합니다."):
        super().__init__(status_code=401, detail=detail)

class ForbiddenException(HTTPException):
    def __init__(self, detail: str = "권한이 없습니다."):
        super().__init__(status_code=403, detail=detail)
