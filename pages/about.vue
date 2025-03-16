<script setup lang="ts">
// 더미 데이터 정의
const companyHistory = [
  { year: "2015", event: "대광 PC 설립" },
  { year: "2017", event: "광주 상업 지구 프로젝트 수주" },
  { year: "2020", event: "전남 지역 PC BOX 설치 시장 점유율 1위" },
  { year: "2023", event: "친환경 건축 인증 획득" },
];

const projectCases = [
  {
    project: "광주 상업 지구",
    client: "A 건설",
    date: "2023-05",
    amount: "15억 원",
  },
  {
    project: "서울 주거 단지",
    client: "B 건설",
    date: "2022-11",
    amount: "20억 원",
  },
  {
    project: "부산 공공 건축물",
    client: "C 공사",
    date: "2021-08",
    amount: "10억 원",
  },
  {
    project: "인천 산업 단지",
    client: "D 산업",
    date: "2024-01",
    amount: "25억 원",
  },
];

const ceoCertifications = [
  "건축기사 1급 (2010년 취득)",
  "토목기사 1급 (2012년 취득)",
  "프리캐스트 콘크리트 전문가 인증 (2015년 취득)",
];

const partnerCompanies = [
  "현대중장비",
  "두산인프라코어",
  "볼보건설기계",
  "삼성물산 중장비 부문",
];
</script>

<template>
  <div class="page-wrapper">
    <!-- 소개 섹션 -->
    <v-container class="intro-section">
      <h1 class="section-title">광주/전남 지역</h1>
      <h1 class="section-title">PC BOX 설치 전문기업</h1>
      <p class="section-subtitle">
        대광 PC는 프리캐스트 콘크리트 기술을 바탕으로 지역 건설 산업을
        선도합니다.
      </p>
    </v-container>

    <!-- 주요 이력 섹션 -->
    <v-container class="history-section">
      <h2 class="section-heading">주요 이력</h2>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-timeline dense>
            <v-timeline-item
              v-for="(item, index) in companyHistory"
              :key="index"
              color="white"
              small
            >
              <v-card class="elevation-2 history-card">
                <v-card-title class="text-h6">{{ item.year }}</v-card-title>
                <v-card-text>{{ item.event }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>

    <!-- 시공 사례 섹션 -->
    <v-container class="cases-section">
      <h2 class="section-heading">시공 사례</h2>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-table class="project-table">
            <thead>
              <tr>
                <th>프로젝트명</th>
                <th>발주처</th>
                <th>완료일</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(caseItem, index) in projectCases" :key="index">
                <td>{{ caseItem.project }}</td>
                <td>{{ caseItem.client }}</td>
                <td>{{ caseItem.date }}</td>
                <td>{{ caseItem.amount }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>

    <!-- 사장님 자격증 섹션 -->
    <v-container class="certifications-section">
      <h2 class="section-heading">대표 자격증</h2>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-list class="cert-list">
            <v-list-item
              v-for="(cert, index) in ceoCertifications"
              :key="index"
            >
              <v-list-item-title>{{ cert }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
/* 전체 페이지 래퍼 */
.page-wrapper {
  background-color: #0f172a; /* 어두운 남색 */
  color: #ffffff;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory; /* 수직 스냅 스크롤 */
  -webkit-overflow-scrolling: touch; /* 모바일에서 부드러운 스크롤 */
}

/* 개별 섹션 */
.intro-section,
.history-section,
.cases-section,
.certifications-section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
}

/* 부드러운 스크롤 */
html {
  scroll-behavior: smooth;
}

/* 섹션 제목 */
.section-title {
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.5rem;
  color: #e5e7eb; /* 밝은 회색으로 살짝 대비 */
  text-align: center;
  margin-top: 1rem;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
}

/* 주요 이력 타임라인 */
.history-card {
  background-color: #1e293b; /* 조금 밝은 남색 */
  color: #ffffff;
  border-radius: 8px;
}

/* 시공 사례 테이블 */
.project-table {
  background-color: #1e293b;
  color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.project-table th {
  background-color: #0f172a;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 1rem;
}

.project-table td {
  padding: 1rem;
  border-bottom: 1px solid #374151; /* 구분선 */
}

/* 자격증 및 협력 회사 목록 */
.cert-list,
.partner-list {
  background-color: transparent;
}

.cert-list .v-list-item-title,
.partner-list .v-list-item-title {
  color: #ffffff;
  font-size: 1.2rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }

  .section-heading {
    font-size: 2rem;
  }

  .project-table th,
  .project-table td {
    font-size: 1rem;
    padding: 0.8rem;
  }
}
</style>
