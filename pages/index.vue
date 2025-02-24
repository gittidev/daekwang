<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const cases = [
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
  {
    image: "/img/case3.png",
    title: "부산 공공 건축물",
    date: "2021년 8월",
  },
  {
    image: "/img/case3.png",
    title: "부산 공공 건축물",
    date: "2021년 8월",
  },
];

const caseGrid = ref<HTMLDivElement | null>(null);

const moveNext = () => {
  const el = caseGrid.value;
  if (!el) return;
  const cardWidth = el.querySelector(".case-card")?.clientWidth || 0;
  el.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
};

const movePrev = () => {
  const el = caseGrid.value;
  if (!el) return;
  const cardWidth = el.querySelector(".case-card")?.clientWidth || 0;
  el.scrollBy({ left: -cardWidth - 20, behavior: "smooth" });
};

onMounted(() => {
  const el = caseGrid.value;
  if (!el) return;

  const handleScrollEnd = () => {
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
      el.scrollTo({ left: 0, behavior: "instant" });
    }
  };

  el.addEventListener("scrollend", handleScrollEnd);

  onUnmounted(() => {
    el.removeEventListener("scrollend", handleScrollEnd);
  });
});
</script>

<template>
  <div>
    <Carousel />
    <div class="index-container">
      <section class="case-list">
        <h2 class="section-title">주요 시공 케이스</h2>
        <div class="case-wrapper">
          <button
            class="arrow prev"
            @click="movePrev"
            aria-label="이전 슬라이드"
          >
            ◀
          </button>
          <div class="case-grid" ref="caseGrid">
            <CaseCard
              v-for="(caseItem, index) in cases"
              :key="index"
              :image="caseItem.image"
              :title="caseItem.title"
              :date="caseItem.date"
            />
          </div>
          <button
            class="arrow next"
            @click="moveNext"
            aria-label="다음 슬라이드"
          >
            ▶
          </button>
        </div>
      </section>
    </div>
    <div class="index-container">Page: index</div>
  </div>
</template>

<style scoped lang="postcss">
.index-container {
  min-height: 100vh;
  padding: 2rem 0;
  font-size: 2rem;
}

.case-list {
  padding: 4rem 0;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: var(--text-shadow);
}

.case-wrapper {
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 2rem;
  box-sizing: content-box;
}

.case-grid {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 0 3rem; /* 좌우 패딩 증가 */
  scroll-behavior: smooth;
  position: relative;
  z-index: 10; /* 카드와 화살표가 상위 요소에 가리지 않도록 */
}

.case-grid::-webkit-scrollbar {
  display: none;
}

.case-grid .case-card {
  flex: 0 0 300px;
  scroll-snap-align: center;
  position: relative;
  z-index: 20; /* hover 시 상위 요소에 가리지 않음 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-grid .case-card:hover {
  transform: translateY(-10px); /* 더 높이 떠오르게 */
  box-shadow: 0 8px 30px var(--shadow-color);
}

.arrow {
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
  z-index: 30; /* 화살표가 카드 위에 오도록 */
}

.arrow:hover {
  background: rgba(107, 114, 128, 0.8);
}

.prev {
  left: 10px; /* 좌측 여백 조정 */
}

.next {
  right: 10px; /* 우측 여백 조정 */
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .case-grid {
    display: grid;
    grid-template-columns: 1fr;
    overflow-x: hidden;
    padding: 0;
  }

  .case-grid .case-card {
    flex: none;
    width: 100%;
  }

  .arrow {
    display: none;
  }

  .section-title {
    font-size: 2rem;
  }

  .case-wrapper {
    padding: 2rem 0;
  }
}

@media (min-width: 769px) {
  .case-grid {
    grid-template-columns: none;
  }
}
</style>
