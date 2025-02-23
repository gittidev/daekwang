<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const carousel = ref<HTMLDivElement | null>(null);

let intervalId: number;

onMounted(() => {
  const el = carousel.value;
  if (!el) return;

  intervalId = window.setInterval(() => {
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
    }
  }, 4000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="index-container">
    <div class="index-carousel" ref="carousel">
      <div class="carousel-img">
        <div class="content-wrapper">
          <NuxtImg src="/img/main1.png" alt="Precast Concrete 시공 예시" />
          <div class="text-content">
            <NuxtImg src="/logo_line.svg" alt="로고" sizes="20px" />
            <h1>대광 PC</h1>
          </div>
        </div>
      </div>

      <div class="carousel-img">
        <div class="content-wrapper">
          <NuxtImg src="/img/main2.png" alt="Precast Concrete 시공 예시" />
          <div class="text-content">
            <h1>Precast Concrete 시공 예시</h1>
          </div>
        </div>
      </div>

      <div class="carousel-img">
        <div class="content-wrapper">
          <NuxtImg src="/img/main3.png" alt="Precast Concrete 시공 예시" />
          <div class="text-content">
            <span>Precast Concrete 시공 예시</span>
          </div>
        </div>
      </div>
      <div class="carousel-img">
        <div class="content-wrapper">
          <NuxtImg src="/img/main4.png" alt="Precast Concrete 시공 예시" />
          <div class="text-content">
            <h1>대광 PC</h1>
          </div>
        </div>
      </div>

      <!-- 무한캐러셀을 위해 첫 번째 슬라이드를 마지막에 복사해 추가 -->
      <div class="carousel-img">
        <div class="content-wrapper">
          <NuxtImg src="/img/main1.png" alt="Precast Concrete 시공 예시" />
          <div class="text-content">
            <NuxtImg src="/logo_line.svg" alt="로고" sizes="20px" />
            <h1>대광 PC</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="index-container">Page: index</div>
  <div class="index-container">Page: index</div>
  <div class="index-container">Page: index</div>
</template>

<style lang="postcss" scoped>
.index-container {
  min-height: 100vh;
}

.index-carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  height: 100vh;
  scroll-behavior: smooth;
}

.carousel-img {
  position: relative;
  flex: none;
  width: 100vw;
  height: 100vh;
  background-color: var(--sub-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
}

.content-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

/* 이미지 좌우 정렬 처리 */
.carousel-img:nth-child(odd) .content-wrapper {
  flex-direction: row;
}

.carousel-img:nth-child(even) .content-wrapper {
  flex-direction: row-reverse;
}

/* 이미지 스타일 */
.content-wrapper img {
  max-width: 60%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.6);
}

/* 텍스트가 들어갈 빈 공간 스타일 */
.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  gap: 1rem;
}

/* overlay 로고 이미지 크기 */
.text-content img {
  width: 100px;
  height: auto;
  filter: none;
}

.index-carousel::-webkit-scrollbar {
  display: none;
}
</style>
