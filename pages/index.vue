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
    <section class="intro-section">
      <h1 class="section-title">광주/전남 지역</h1>
      <h1 class="section-title">PC BOX 설치 전문기업</h1>
      <p class="section-subtitle">
        대광 PC는 합리적인 가격의 프리캐스트 콘크리트 암거/설치 전문 업체입니다.
      </p>
    </section>

    <section class="hero-section"><Carousel /></section>
  </div>
</template>

<style scoped>
/* 전체 페이지 래퍼 (스크롤 가능하게 설정) */
.page-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

/* 스크롤바 숨기기 */
.page-container::-webkit-scrollbar {
  display: none;
}

/* 섹션별 스크롤 스냅 */
.intro-section,
.hero-section,
.projects-section,
.footer-section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  min-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
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
  color: #e5e7eb; /* 밝은 회색 */
  text-align: center;
  margin-top: 1rem;
}

/* 프로젝트 섹션 */
.projects-section {
  padding: 4rem 0;
  position: relative;
}

/* 프로젝트 슬라이더 */
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
}

.project-slider::-webkit-scrollbar {
  display: none;
}

/* 개별 프로젝트 카드 */
.project-slider .project-card {
  flex: 0 0 300px;
  scroll-snap-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-slider .project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px var(--shadow-color);
}

/* 네비게이션 버튼 */
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
