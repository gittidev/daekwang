# 🛠️ DK_PC - 공사 견적 및 일정 관리 시스템

> **Nuxt 3 + FastAPI 기반**  
> 시공 업자를 위한 **공사 견적 자동화 & 일정/매출 관리 웹 서비스**

---

## 🌐 기술 스택

| 영역         | 기술                                                           |
| ------------ | -------------------------------------------------------------- |
| 프론트엔드   | [Nuxt 3](https://nuxt.com/) + TypeScript                       |
| 백엔드       | [FastAPI](https://fastapi.tiangolo.com/) + SQLite + SQLAlchemy |
| 데이터베이스 | SQLite (→ PostgreSQL or RDS 확장 예정)                         |
| 인증         | JWT + 쿠키 기반 인증                                           |
| 파일 업로드  | Firebase Storage                                               |
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

- 관리자 로그인 (JWT 토큰 기반 인증)
- 관리자 계정 생성 (기존 관리자만 가능)
- 시공 등록 / 수정 / 삭제
- 금액(매출액) 관리
- 시공 일정 등록 및 캘린더 기반 관리
- 공개 여부 / 썸네일 업로드
- 관리자 대시보드: 시공 건수 요약, 차트 시각화

---

## 📁 프로젝트 구조

### 🔹 백엔드 (FastAPI)

```
app/
├── main.py                      # FastAPI 앱 진입점
├── database.py                 # DB 설정 및 세션 관리
├── config.py                   # 환경변수 및 설정
├── models/                     # SQLAlchemy 모델 정의
├── schemas/                    # Pydantic 응답/요청 구조
├── services/                   # 비즈니스 로직 처리
├── repositories/               # DB 접근 (조회/삽입)
├── routers/                    # FastAPI 라우터 (API endpoint)
└── utils/                      # 공통 응답, 예외 처리 등 유틸
```

### 🔹 프론트엔드 (Nuxt)

```
client/
├── pages/                      # 각 페이지 라우팅 (SSR 기반)
├── components/                 # 재사용 가능한 UI 컴포넌트
├── composables/               # 인증 토큰, API 요청 등 커스텀 훅
├── lib/api/                   # API 요청 함수 정리
├── types/                     # 공통 타입 정의
└── assets/                    # 이미지 및 스타일
```

---

## ⚙️ 실행 방법

### 🔹 공통

```bash
# 개발용 (Hot Reload)
docker compose -f docker-compose.dev.yml up --build

# 운영용 (SSR + API 배포)
docker compose up --build
```

> ⚠️ Nuxt SSR 관련 포트 충돌 시 볼륨 삭제 후 재시도:

```bash
docker compose -f docker-compose.dev.yml down --volumes --remove-orphans
```

---

### 🔹 백엔드 (FastAPI)

```bash
# 가상환경 활성화
source venv/bin/activate  # or venv/Scripts/activate (Windows)

# 패키지 설치
pip install -r requirements.txt

# 개발 서버 실행
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# 운영 서버 실행
ENV_FILE=.env.production uvicorn app.main:app
```

- API 문서: http://localhost:8000/docs
- Redoc 문서: http://localhost:8000/redoc

---

### 🔹 프론트엔드 (Nuxt 3)

```bash
cd client

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

- 프론트엔드 접근: http://localhost:3000
- 환경변수로 API 주소를 `.env` 혹은 `docker-compose`에 설정 필요  
  (예: `NUXT_PUBLIC_API_URL=http://localhost:8000/api`)

---

## 🧪 테스트 (백엔드)

```bash
# 특정 테스트만 실행
PYTHONPATH=. pytest tests/test_construction_service.py

# 전체 테스트 실행
PYTHONPATH=. pytest
```

> 테스트용 SQLite 별도 구성 가능  
> `conftest.py`에서 DB 세션/롤백 자동 처리

---

## 🔒 인증 방식

- 로그인 시 `access_token`(Bearer) + `refresh_token`(쿠키)
- API 요청 시 `Authorization: Bearer <토큰>`
- 토큰 만료 시 `/admin/refresh` 엔드포인트로 자동 갱신
- `useAdminToken`, `useAdminAuth` 컴포저블로 상태 관리

---

## 📦 배포 계획

- FastAPI + Nuxt 프로젝트를 Docker로 컨테이너화
- Firebase Storage를 통한 이미지 업로드
- AWS EC2 프리티어에 배포 (Nginx 리버스 프록시 구성)
- 도메인: Route53 or Cloudflare 연결

---

## 📝 향후 개발 계획

- [x] 관리자 계정 생성 기능
- [x] 관리자 인증 및 대시보드 구성
- [ ] 이미지 갤러리 업로드
- [ ] 시공 완료 상태 필터
- [ ] 사용자 견적 요청 양식 추가
- [ ] 관리자 활동 로그 기능
- [ ] DB: PostgreSQL 또는 RDS로 이관

---

## 🙌 제작자

| 이름     | 역할                                     |
| -------- | ---------------------------------------- |
| 박보람람 | 전체 설계, 백엔드 구현, 프론트 통합 예정 |

---

## 📬 문의 & 협업

> **이 프로젝트는 학습과 실무 적용을 위한 개인 프로젝트입니다.**
