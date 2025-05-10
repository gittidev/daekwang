from typing import Generic, Optional, TypeVar
from pydantic import BaseModel
from app.constants.status_code import StatusCode

T = TypeVar("T")

class APIResponse(BaseModel, Generic[T]):
    success: bool
    message: Optional[str] = None
    data: Optional[T] =  None
    code: Optional[StatusCode] = None
