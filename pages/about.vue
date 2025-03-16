<script setup lang="ts">
import { ref, computed } from "vue";

const isMobile = ref(window.innerWidth < 768);

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth < 768;
});

const companyHistory = [
  { year: "1994", events: ["대광 PC 설립"] },
  { year: "2017", events: ["광주 하남3지구 오수관로 설치"] },
  {
    year: "2025",
    events: [
      "영광 중점관리지역 PC 암거설치",
      "친환경 건축 인증 획득",
      "대형 프로젝트 수주",
    ],
  },
];

const projectCases = [
  {
    project: "광주 첨단지구 도로 확장",
    client: "광주시청",
    date: "2024-02",
    amount: "12억 원",
  },
  {
    project: "목포 해양산업단지 조성",
    client: "전남개발공사",
    date: "2023-10",
    amount: "18억 원",
  },
  {
    project: "순천 친환경 주거단지",
    client: "순천시청",
    date: "2023-06",
    amount: "25억 원",
  },
  {
    project: "여수 산업단지 배수 개선",
    client: "여수산업공단",
    date: "2022-11",
    amount: "15억 원",
  },
  {
    project: "나주 에너지밸리 인프라 구축",
    client: "한전KDN",
    date: "2022-08",
    amount: "22억 원",
  },
];

const ceoCertifications = [
  "건축기사 1급 (2010년 취득)",
  "토목기사 1급 (2012년 취득)",
  "프리캐스트 콘크리트 전문가 인증 (2015년 취득)",
];

const timelineAlign = computed(() => (isMobile.value ? "start" : "center"));
</script>

<template>
  <div class="page-wrapper">
    <!-- 주요 이력 -->
    <v-container class="history-section">
      <h2 class="section-heading">주요 이력</h2>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-timeline :align="timelineAlign" class="history-timeline">
            <v-timeline-item
              v-for="(history, index) in companyHistory"
              :key="index"
              :color="'#4F46E5'"
              small
            >
              <v-card class="history-card">
                <v-card-title class="text-h6">{{ history.year }}</v-card-title>
                <v-card-text>
                  <ul>
                    <li v-for="(event, idx) in history.events" :key="idx">
                      {{ event }}
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>

    <!-- 시공 사례 -->
    <v-container class="cases-section">
      <h2 class="section-heading">전남권역 시공 사례</h2>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="table-wrapper">
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
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
/* 전체 페이지 스타일 */
.page-wrapper {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

/* 스크롤바 숨기기 */
.page-wrapper::-webkit-scrollbar {
  display: none;
}
/* 주요 섹션 스타일 */
.history-section,
.cases-section,
.certifications-section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  min-width: 100%;
}

.v-row {
  min-width: 100%;
}

/* 섹션 제목 */
.section-heading {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* 이력 타임라인 스타일 */
.history-timeline {
  width: 100%;
  max-width: 800px;
}

.history-card {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 시공 사례 테이블 스타일 */
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}
.project-table {
  width: 100%;
  min-width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.project-table th,
.project-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.project-table th {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}

.project-table tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 반응형 */
@media (max-width: 768px) {
  .section-heading {
    font-size: 1.8rem;
  }

  .project-table {
    min-width: 100%;
  }

  .history-card {
    width: 100%;
    max-width: 90%;
  }
}
</style>
