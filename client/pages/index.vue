<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import BackgroundPaths from "@/components/BackgroundPaths.vue";
import CubeScene from "@/components/scene/CubeScene.vue";

const showScene = ref(true);
// 세션마다 다른 타임스탬프를 키로 사용
const sceneKey = ref(Date.now());
const route = useRoute();
const router = useRouter();

// 라우터 경로가 바뀔 때마다 새로운 키 할당
watch(
  () => route.fullPath,
  () => {
    sceneKey.value = Date.now();
  }
);
const sections = ["intro", "history", "projects"];
const labels = ["소개", "연혁", "시공 사례"];
const projects = [
  {
    image: "/img/main1.png",
    title: "영광 중점관리지역 시공",
    date: "2024년 ~ 진행중",
  },
  {
    image: "/img/main2.png",
    title: "장성 주거 단지 시공",
    date: "2022년 11월",
  },
  { image: "/img/main3.png", title: "담양 공공 건축물", date: "2021년 8월" },
  {
    image: "/img/main4.png",
    title: "해수소통로",
    date: "2024년 1월",
  },
  { image: "/img/main3.png", title: "부산 공공 건축물", date: "2021년 8월" },
  { image: "/img/main4.png", title: "인천 산업 단지", date: "2024년 1월" },
];

const history = [
  { year: "1994", event: "대광 PC 설립" },
  { year: "2017", event: "광주 하남3지구 오수관로 설치" },
  { year: "2025", event: "영광 중점관리지역 PC 암거설치" },
  { year: "2025", event: "영광 중점관리지역 PC 암거설치" },
];

const currentSection = ref(0);
const indicatorY = ref(0);

function scrollTo(index: number) {
  const el = document.getElementById(sections[index]);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = sections.findIndex((s) => s === id);
          if (index !== -1) {
            currentSection.value = index;

            const rect = entry.target.getBoundingClientRect();
            indicatorY.value = rect.height / 2 - 12;
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <div class="index-page relative">
    <!-- 백그라운드 -->
    <section id="paths" class="scene-paths relative">
      <div
        class="scene-overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10"
      >
        <div class="flex">
          <img src="/logo.svg" alt="로고" class="logo mr-2" />
          <h1 class="title text-primary">대광 PC</h1>
        </div>
        <p class="subtitle">PC BOX 설치 전문기업</p>
      </div>
      <BackgroundPaths />
    </section>

    <!-- ✅ 항상 표시되는 인디케이터 -->
    <div
      class="section-indicator fixed left-6 z-50 top-1/2 -translate-y-1/2 transition-transform duration-300"
    >
      <ul class="flex flex-col gap-4">
        <li v-for="(label, i) in labels" :key="i">
          <button
            class="text-xl font-bold px-4 py-2 rounded-lg transition-all duration-300"
            :class="
              currentSection === i
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-600'
            "
            @click="scrollTo(i)"
          >
            {{ label }}
          </button>
        </li>
      </ul>
    </div>

    <!-- 섹션 내용 -->
    <section id="intro" class="scene-wrapper section-dark">
      <div class="scene-intro text-center space-y-6">
        <div class="flex justify-center items-center">
          <img src="/logo.svg" alt="로고" class="logo mr-3" />
          <h1 class="title text-white">대광 PC</h1>
        </div>
        <p class="subtitle text-xl text-white leading-relaxed max-w-xl mx-auto">
          <strong class="text-accent">PC 박스</strong>는
          <strong>미리 제작된 콘크리트 구조물</strong>로,<br />
          <strong>배수로</strong> 및 <strong>지하 구조물 시공</strong>에
          사용됩니다.<br /><br />

          <strong>정밀한 시공</strong>과 <strong>전문 설치 기술</strong>을
          바탕으로,<br />
          인프라의 든든한 기반을 만들어 갑니다.
        </p>
      </div>
      <section class="three-section">
        <CubeScene :key="sceneKey" />
      </section>
    </section>

    <section id="history" class="history-section section-light">
      <h2 class="section-heading">🏗️ 주요 이력</h2>
      <ul class="history-list">
        <li v-for="item in history" :key="item.year" class="history-item">
          <span class="year">{{ item.year }}</span>
          <span class="event">{{ item.event }}</span>
        </li>
      </ul>
    </section>

    <section id="projects" class="projects section-muted">
      <h2 class="projects-title">시공 사례</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          @click="router.push('/works')"
          :key="project.title"
          class="project-card"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="project-image"
          />
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-date">{{ project.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.three-section {
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: 100vh;
}
.scene-paths {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 0;
}

.index-page {
  background: var(--background-base);
  color: var(--text-primary);
  scroll-behavior: smooth;
}

.logo {
  width: 90px;
  margin-bottom: 1rem;
}

.title {
  font-size: 5rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}

.subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-secondary);
  margin-top: 0.5rem;
  text-align: center;
}
.section-dark {
  background-color: #0f172a;
  color: #f8fafc;
}

.section-light {
  background-color: #f8fafc;
  color: #1e293b;
}

.section-muted {
  background-color: #e2e8f0;
  color: #1e293b;
}

.scene-wrapper,
.history-section,
.projects {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.scene-intro {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-heading {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.history-list {
  list-style: none;
  padding: 0;
  max-width: 600px;
  width: 100%;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-soft);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px var(--shadow-color);
}

.year {
  font-weight: bold;
  color: var(--accent-color);
  margin-right: 1rem;
  min-width: 60px;
}

.event {
  color: var(--text-primary);
  flex: 1;
}

.projects-title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.project-card {
  background: var(--background-soft);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px var(--shadow-color);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-info {
  padding: 1rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}
</style>
