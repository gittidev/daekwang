import firebase_admin
from firebase_admin import credentials, storage
import os
import uuid
from fastapi import UploadFile
import os

if not firebase_admin._apps:
    cred = credentials.Certificate(os.getenv("FIREBASE_CREDENTIAL_PATH"))
    firebase_admin.initialize_app(cred, {
        'storageBucket': os.getenv("FIREBASE_STORAGE_BUCKET")
    })

def upload_to_firebase(file: UploadFile) -> str:
    ext = os.path.splitext(file.filename)[1]
    blob = storage.bucket().blob(f"uploads/{uuid.uuid4()}{ext}")
    blob.upload_from_file(file.file, content_type=file.content_type)
    blob.make_public()
    return blob.public_url
