<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();
const timelineAlign = computed(() => (mdAndDown.value ? "start" : "center"));

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
    id: 1,
    project: "광주 첨단지구 도로 확장",
    client: "광주시청",
    date: "2024-02",
    amount: "12억 원",
  },
  {
    id: 2,
    project: "목포 해양산업단지 조성",
    client: "전남개발공사",
    date: "2023-10",
    amount: "18억 원",
  },
  {
    id: 3,
    project: "순천 친환경 주거단지",
    client: "순천시청",
    date: "2023-06",
    amount: "25억 원",
  },
  {
    id: 4,
    project: "여수 산업단지 배수 개선",
    client: "여수산업공단",
    date: "2022-11",
    amount: "15억 원",
  },
  {
    id: 5,
    project: "나주 에너지밸리 인프라 구축",
    client: "한전KDN",
    date: "2022-08",
    amount: "22억 원",
  },
];
</script>

<template>
  <div class="page-wrapper">
    <!-- 주요 이력 -->
    <v-container class="history-section">
      <h2 class="section-heading">🏗️ 주요 이력</h2>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-timeline :align="timelineAlign" class="history-timeline">
            <v-timeline-item
              v-for="history in companyHistory"
              :key="history.year"
              color="#2563EB"
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
      <h2 class="section-heading">🛠️ 전남권역 시공 사례</h2>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="table-wrapper">
            <v-table class="project-table">
              <table>
                <thead>
                  <tr>
                    <th>프로젝트명</th>
                    <th>발주처</th>
                    <th>완료일</th>
                    <th>금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="caseItem in projectCases" :key="caseItem.id">
                    <td>{{ caseItem.project }}</td>
                    <td>{{ caseItem.client }}</td>
                    <td>{{ caseItem.date }}</td>
                    <td>{{ caseItem.amount }}</td>
                  </tr>
                </tbody>
              </table>
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
  background: linear-gradient(135deg, #1e293b 10%, #334155 50%, #1e293b 90%);
  color: #f8fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 주요 섹션 스타일 */
.history-section,
.cases-section {
  min-width: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* v-timeline 중앙 정렬 */
.history-timeline {
  max-width: 800px;
  margin: auto;
}

/* 카드 디자인 */
.history-card {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 테이블 스타일 */
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.project-table table {
  width: 100%;
  min-width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff; /* 글씨 색상 밝게 조정 */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 테이블 헤더 */
.project-table th {
  background-color: rgba(37, 99, 235, 0.4);
  font-weight: bold;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
}

/* 테이블 행 스타일 */
.project-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* 행 색상 조정 */
.project-table tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.2);
}

.project-table tr:nth-child(odd) {
  background-color: rgba(30, 41, 59, 0.6);
}

.project-table tr:hover {
  background-color: rgba(37, 99, 235, 0.5);
}

/* 반응형 */
@media (max-width: 1024px) {
  .section-heading {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .history-card {
    max-width: 90%;
  }

  .project-table th,
  .project-table td {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}
</style>
