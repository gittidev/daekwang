from typing import Generic, Optional, TypeVar
from pydantic.generics import GenericModel
from app.constants.status_code import StatusCode

T = TypeVar("T")

class BaseResponse(GenericModel, Generic[T]):
    success: bool
    message: Optional[str] = None
    data: Optional[T] =  None
    code: Optional[StatusCode] = None
