<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const projects = [
  {
    image: "/img/main1.png",
    title: "광주 상업 지구 프로젝트",
    date: "2023년 5월",
    location: "광주광역시",
  },
  {
    image: "/img/main2.png",
    title: "서울 주거 단지 시공",
    date: "2022년 11월",
    location: "서울특별시",
  },
  {
    image: "/img/main3.png",
    title: "부산 공공 건축물",
    date: "2021년 8월",
    location: "부산광역시",
  },
  {
    image: "/img/main4.png",
    title: "인천 산업 단지",
    date: "2024년 1월",
    location: "인천광역시",
  },
];

const carousel = ref<HTMLDivElement | null>(null);
let intervalId: number;

const moveNextSlide = () => {
  const el = carousel.value;
  if (!el) return;

  const slideWidth = el.querySelector(".carousel-slide")?.clientWidth || 0;
  const gap = 0; // 슬라이드 사이 간격 (CSS에서 추가하면 반영)
  const nextPosition = el.scrollLeft + slideWidth + gap;

  if (nextPosition >= el.scrollWidth - el.clientWidth) {
    el.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    el.scrollBy({ left: slideWidth + gap, behavior: "smooth" });
  }
};

onMounted(() => {
  intervalId = window.setInterval(moveNextSlide, 7000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="carousel-wrapper" ref="carousel">
    <div
      class="carousel-slide"
      v-for="(project, index) in projects"
      :key="index"
    >
      <!-- 왼쪽: 현장 이미지 -->
      <div class="slide-image">
        <NuxtImg :src="project.image" :alt="project.title" />
      </div>

      <!-- 오른쪽: 프로젝트 정보 -->
      <div class="slide-info">
        <h2>{{ project.title }}</h2>
        <p><strong>시공 날짜:</strong> {{ project.date }}</p>
        <p><strong>위치:</strong> {{ project.location }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  display: flex;
  overflow-x: auto; /* 🔹 scroll 허용 */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth; /* 🔹 부드러운 스크롤 */
  overflow-y: hidden;
  height: 100vh;
  white-space: nowrap;
  padding: 0;
}

.carousel-wrapper::-webkit-scrollbar {
  display: none; /* 🔹 스크롤바 숨김 */
}

.carousel-slide {
  flex: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  box-sizing: border-box;
}

/* 왼쪽: 현장 사진 */
.slide-image {
  flex: 1;
  height: 100vh;
  overflow: hidden;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 오른쪽: 프로젝트 정보 */
.slide-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.6);
  color: var(--primary-color);
  padding: 4rem;
}

.slide-info h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.slide-info p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

/* 반응형 */
@media (max-width: 768px) {
  .carousel-slide {
    flex-direction: column;
  }

  .slide-image {
    height: 50vh;
  }

  .slide-info {
    height: 50vh;
    text-align: center;
    align-items: center;
    padding: 2rem;
  }

  .slide-info h2 {
    font-size: 2rem;
  }

  .slide-info p {
    font-size: 1rem;
  }
}
</style>
