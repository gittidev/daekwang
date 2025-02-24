<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const carousel = ref<HTMLDivElement | null>(null);
let intervalId: number;

const moveNextSlide = () => {
  const el = carousel.value;
  if (!el) return;

  const currentScroll = el.scrollLeft;
  const maxScroll = el.scrollWidth - el.clientWidth;

  if (currentScroll >= maxScroll) {
    el.scrollTo({ left: 0, behavior: "instant" });
  } else {
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  }
};

const handleTransitionEnd = () => {
  const el = carousel.value;
  if (!el) return;

  if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
    el.scrollTo({ left: 0, behavior: "instant" });
  }
};

onMounted(() => {
  const el = carousel.value;
  if (!el) return;

  intervalId = window.setInterval(moveNextSlide, 5000);

  el.addEventListener("transitionend", handleTransitionEnd);

  onUnmounted(() => {
    clearInterval(intervalId);
    el.removeEventListener("transitionend", handleTransitionEnd);
  });
});
</script>

<template>
  <div class="carousel-container" ref="carousel">
    <div class="carousel-slide">
      <div class="slide-content">
        <NuxtImg src="/img/main1.png" alt="대광 PC" />
        <div class="slide-text">
          <NuxtImg src="/logo_line.svg" alt="로고" sizes="20px" />
          <h1>대광 PC</h1>
          <p>믿을 수 있는 프리캐스트 콘크리트 전문 시공기업, 대광 PC</p>
        </div>
      </div>
    </div>
    <div class="carousel-slide">
      <div class="slide-content">
        <NuxtImg src="/img/main2.png" alt="Precast Concrete 시공 예시" />
        <div class="slide-text">
          <h1>최고의 기술력과 노하우</h1>
          <p>정확하고 안전한 Precast Concrete 시공 예시</p>
        </div>
      </div>
    </div>
    <div class="carousel-slide">
      <div class="slide-content">
        <NuxtImg src="/img/main3.png" alt="친환경 건축" />
        <div class="slide-text">
          <h1>친환경 건축을 선도하다</h1>
          <p>지속 가능한 프리캐스트 콘크리트 건축 솔루션</p>
        </div>
      </div>
    </div>
    <div class="carousel-slide">
      <div class="slide-content">
        <NuxtImg src="/img/main4.png" alt="혁신적인 시공 방법" />
        <div class="slide-text">
          <h1>혁신적인 시공 방법</h1>
          <p>빠르고 효율적인 프리캐스트 콘크리트 시공 현장</p>
        </div>
      </div>
    </div>
    <div class="carousel-slide">
      <div class="slide-content">
        <NuxtImg src="/img/main1.png" alt="대광 PC" />
        <div class="slide-text">
          <NuxtImg src="/logo_line.svg" alt="로고" sizes="20px" />
          <h1>대광 PC</h1>
          <p>믿을 수 있는 프리캐스트 콘크리트 전문 시공기업, 대광 PC</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.carousel-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  min-height: 100vh;
  scroll-behavior: smooth;
  background: var(--main-bg);
  overflow-y: hidden;
}

.carousel-slide {
  flex: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  background: var(--sub-bg);
  box-shadow: inset 0 0 20px var(--shadow-color);
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-content img {
  max-width: 60%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: transform 0.3s ease-out, filter 0.3s ease-out;
  border-radius: 10px;
  box-shadow: 0 4px 20px var(--shadow-color);
}

.slide-content img:hover {
  filter: brightness(1);
  transform: scale(1.01);
}

.slide-text {
  flex: 1;
  color: var(--main-font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  gap: 1rem;
  text-shadow: var(--text-shadow);
}

.slide-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.slide-text p {
  font-size: 1.2rem;
  opacity: 0.9;
  color: var(--accent-color);
}

.slide-text img {
  width: 100px;
  filter: none;
  transition: transform 0.3s ease;
}

.slide-text img:hover {
  transform: scale(1.05);
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .slide-text h1 {
    font-size: 2rem;
  }

  .slide-text p {
    font-size: 1rem;
  }

  .slide-content img {
    max-width: 100%;
    height: auto;
  }

  .slide-text {
    padding: 1.5rem;
  }
}
</style>
