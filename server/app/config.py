# server/config.py
import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent

# 1단계: .env (포인터 파일) 먼저 로드
load_dotenv(dotenv_path=BASE_DIR / ".env")  


# 2단계: ENV_FILE 값에 따라 실제 환경 파일 로드
env_file = os.getenv("ENV_FILE", ".env.production") 
load_dotenv(dotenv_path=BASE_DIR / env_file)

# 3단계: 실제 사용할 환경 변수 가져오기
ENV = os.getenv("ENV", "production")
INIT_ADMIN_USERNAME = os.getenv("INIT_ADMIN_USERNAME")
INIT_ADMIN_PASSWORD = os.getenv("INIT_ADMIN_PASSWORD")

SECRET_KEY = os.getenv("SECRET_KEY", "super-secret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 120  # 2시간(120분)
REFRESH_TOKEN_EXPIRE_DAYS = 7 # 7일

