<script setup lang="ts">
import { ref, onMounted } from "vue";

const projects = [
  {
    image: "/img/main1.png",
    title: "광주 상업 지구 프로젝트",
    date: "2023년 5월",
  },
  {
    image: "/img/main2.png",
    title: "서울 주거 단지 시공",
    date: "2022년 11월",
  },
  { image: "/img/main3.png", title: "부산 공공 건축물", date: "2021년 8월" },
  { image: "/img/main4.png", title: "인천 산업 단지", date: "2024년 1월" },
];

const history = [
  { year: "1994", event: "대광 PC 설립" },
  { year: "2017", event: "광주 하남3지구 오수관로 설치" },
  { year: "2025", event: "영광 중점관리지역 PC 암거설치 및 친환경 인증 획득" },
];

onMounted(() => {
  const fadeEls = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeEls.forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="index-page">
    <section class="scene-wrapper fade-up section-dark">
      <div class="scene-overlay">
        <div class="flex">
          <img src="/logo.svg" alt="로고" class="logo mr-2" />
          <h1 class="title text-white">대광 PC</h1>
        </div>
        <p class="subtitle">PC BOX 설치 전문기업</p>
      </div>
    </section>

    <section class="history-section fade-up section-light">
      <h2 class="section-heading">🏗️ 주요 이력</h2>
      <ul class="history-list">
        <li v-for="item in history" :key="item.year" class="history-item">
          <span class="year">{{ item.year }}</span>
          <span class="event">{{ item.event }}</span>
        </li>
      </ul>
    </section>

    <section class="projects fade-up section-muted">
      <h2 class="projects-title">시공 사례</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects"
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
.index-page {
  background: var(--background-base);
  color: var(--text-primary);
  scroll-behavior: smooth;
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
}

.scene-overlay {
  text-align: center;
  z-index: 2;
}

.logo {
  width: 60px;
  margin-bottom: 1rem;
}

.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.in-view {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition-delay: 0.2s;
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

.title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-top: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .projects-title {
    font-size: 1.5rem;
  }
}
</style>
