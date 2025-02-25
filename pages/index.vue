<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const projects = [
  {
    image: "/img/case1.png",
    title: "광주 상업 지구 프로젝트",
    date: "2023년 5월",
  },
  {
    image: "/img/case2.png",
    title: "서울 주거 단지 시공",
    date: "2022년 11월",
  },
  { image: "/img/case3.png", title: "부산 공공 건축물", date: "2021년 8월" },
  { image: "/img/case4.png", title: "인천 산업 단지", date: "2024년 1월" },
];

const projectSlider = ref<HTMLDivElement | null>(null);

const moveNext = () => {
  const el = projectSlider.value;
  if (!el) return;
  const slideWidth = el.querySelector(".project-card")?.clientWidth || 0;
  const gap = 32; // CSS의 gap: 2rem (32px) 반영
  const nextPosition =
    Math.ceil(el.scrollLeft / (slideWidth + gap)) * (slideWidth + gap) +
    slideWidth +
    gap;
  if (nextPosition >= el.scrollWidth - el.clientWidth) {
    el.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    el.scrollTo({ left: nextPosition, behavior: "smooth" });
  }
};

const movePrev = () => {
  const el = projectSlider.value;
  if (!el) return;
  const slideWidth = el.querySelector(".project-card")?.clientWidth || 0;
  const gap = 32;
  const prevPosition =
    Math.floor(el.scrollLeft / (slideWidth + gap)) * (slideWidth + gap) -
    slideWidth -
    gap;
  el.scrollTo({
    left: prevPosition < 0 ? 0 : prevPosition,
    behavior: "smooth",
  });
};

onMounted(() => {
  const el = projectSlider.value;
  if (!el) return;

  el.addEventListener("scrollend", () => {
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
      el.scrollTo({ left: 0, behavior: "instant" });
    }
  });

  onUnmounted(() => {
    el.removeEventListener("scrollend", () => {});
  });
});
</script>

<template>
  <div class="page-container">
    <section class="hero-section"><Carousel /></section>
    <section class="projects-section">
      <div class="content-wrapper">
        <h2 class="section-heading">주요 시공 사례</h2>
        <div class="slider-container">
          <button
            class="nav-arrow prev"
            @click="movePrev"
            aria-label="이전 프로젝트"
          >
            ◀
          </button>
          <div class="project-slider" ref="projectSlider">
            <CaseCard
              v-for="(project, index) in projects"
              :key="index"
              :image="project.image"
              :title="project.title"
              :date="project.date"
            />
          </div>
          <button
            class="nav-arrow next"
            @click="moveNext"
            aria-label="다음 프로젝트"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
    <section class="footer-section">
      <div class="content-wrapper">Page: index_3</div>
    </section>
  </div>
</template>

<style scoped lang="postcss">
.page-container {
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

/* 각 섹션 */
.hero-section,
.projects-section,
.footer-section {
  scroll-snap-align: start;
  min-height: 100vh;
}

.content-wrapper {
  min-height: 100vh;
  padding: 2rem 0;
  font-size: 2rem;
}

.projects-section {
  padding: 4rem 0;
  position: relative;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: var(--text-shadow);
}

.slider-container {
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 2rem;
  box-sizing: content-box;
}

.project-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 0 3rem;
  scroll-behavior: smooth;
  position: relative;
  z-index: 10;
}

.project-slider::-webkit-scrollbar {
  display: none;
}

.project-slider .project-card {
  flex: 0 0 300px;
  scroll-snap-align: center;
  position: relative;
  z-index: 20;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-slider .project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px var(--shadow-color);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(15, 23, 42, 0.8);
  color: var(--primary-color);
  border: none;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  z-index: 30;
}

.nav-arrow:hover {
  background: rgba(107, 114, 128, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .project-slider {
    display: grid;
    grid-template-columns: 1fr;
    overflow-x: hidden;
    padding: 0;
  }

  .project-slider .project-card {
    flex: none;
    width: 100%;
  }

  .nav-arrow {
    display: none;
  }

  .section-heading {
    font-size: 2rem;
  }

  .slider-container {
    padding: 2rem 0;
  }
}

@media (min-width: 769px) {
  .project-slider {
    grid-template-columns: none;
  }
}
</style>
