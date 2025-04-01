# 🛠️ DK_PC - 공사 견적 및 일정 관리 시스템

> **Nuxt + FastAPI 기반**  
> 시공 업자를 위한 **공사 견적 자동화 & 일정/매출 관리 웹 서비스**

---

## 🌐 기술 스택

| 영역         | 기술                                                           |
| ------------ | -------------------------------------------------------------- |
| 프론트엔드   | [Nuxt 3](https://nuxt.com/) + TypeScript                       |
| 백엔드       | [FastAPI](https://fastapi.tiangolo.com/) + SQLite + SQLAlchemy |
| 데이터베이스 | SQLite (→ PostgreSQL or RDS 확장 예정)                         |
| 테스트       | Pytest                                                         |
| 배포 예정    | Docker + AWS EC2 (프리티어)                                    |

---

## 📌 주요 기능

### ✅ 사용자 (일반)

- 시공 내역 목록 및 상세 조회
- 공개된 시공만 열람 가능
- 썸네일 기반 시공 리스트 뷰 제공
- 추후: 견적 요청 유도 폼 연결 예정

### 🔐 관리자

- 시공 등록 / 수정 / 삭제
- 금액(매출액) 관리
- 시공 일정 등록 및 캘린더 기반 관리
- 공개 여부 / 썸네일 업로드
- (예정) 로그인 인증: JWT 기반

---

## 📁 프로젝트 구조 (백엔드)

```

app/
├── main.py # FastAPI 앱 진입점
├── database.py # DB 설정 및 세션 관리
├── models/ # SQLAlchemy 모델 정의
├── schemas/ # Pydantic 응답/요청 구조
├── services/ # 비즈니스 로직 (트랜잭션 처리)
├── repositories/ # DB 접근 (조회/삽입)
├── routers/ # FastAPI 라우터 (API endpoint)
tests/ # 단위 테스트
├── conftest.py # 테스트용 DB 세션
├── test_construction_service.py # 시공 서비스 로직 테스트

```

---

## ⚙️ 실행 방법

### 🔹 백엔드 (FastAPI)

```bash
# 1. 가상환경 활성화
source venv/Scripts/activate  # Windows
# 또는
source venv/bin/activate      # macOS/Linux

# 2. 패키지 설치
pip install -r requirements.txt

# 3. 서버 실행
uvicorn app.main:app --reload
```

- Swagger UI: http://localhost:8000/docs
- Redoc: http://localhost:8000/redoc

---

### 🔹 프론트엔드 (Nuxt)

```bash
# 루트 or frontend 디렉토리 기준
npm install
npm run dev
```

- Nuxt 3 기반 프론트엔드는 `http://localhost:3000` 에서 확인 가능
- 프론트에서는 FastAPI 서버와 API 연동

---

## 🧪 테스트 방법 (백엔드)

```bash
# 특정 파일만 실행
PYTHONPATH=. pytest app/test/test_construction_service.py

# 전체 테스트 실행
PYTHONPATH=. pytest
```

> ⚠️ `PYTHONPATH=.` 또는 `sys.path` 설정 필요 (conftest.py에 처리 가능)

---

## 📦 배포 예정

- Dockerfile 작성 후 `FastAPI + SQLite` 이미지 빌드
- AWS EC2 프리티어에 Nginx + uvicorn 서버 배포
- Cloudflare or Route53로 도메인 연결 (선택)

---

## 📝 향후 개발 계획

- [ ] 관리자 인증 (JWT + OAuth2)
- [ ] 이미지 파일 업로드 (썸네일 및 갤러리)
- [ ] 캘린더 UI 연동
- [ ] 공사 완료 상태 필터
- [ ] 견적 요청 폼 (프론트 통합)
- [ ] PostgreSQL로 DB 이관

---

## 🙌 제작자

| 이름     | 역할                                     |
| -------- | ---------------------------------------- |
| 박보람람 | 전체 설계, 백엔드 구현, 프론트 통합 예정 |

---

## 📬 문의 & 협업

이 프로젝트는 학습 및 실사용 목적입니다.
