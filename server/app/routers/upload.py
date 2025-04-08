import os
import boto3
from fastapi import APIRouter, File, UploadFile
import uuid

router = APIRouter()

aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")
bucket_name = os.getenv("AWS_S3_BUCKET")


s3_client = boto3.client(
    "s3",
 aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name="ap-northeast-2"  
)


@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    file_extension = file.filename.split(".")[-1]
    key = f"uploads/{uuid.uuid4()}.{file_extension}"

    s3_client.upload_fileobj(file.file, bucket_name, key, ExtraArgs={"ContentType": file.content_type})

    image_url = f"https://{bucket_name}.s3.ap-northeast-2.amazonaws.com/{key}"
    return {"url": image_url}
