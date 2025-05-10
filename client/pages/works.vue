<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import ConstructionCard from "@/components/ConstructionCard.vue";
import { useAsyncData } from "nuxt/app";
import type { ConstructionResponse } from "@/types/construction";

const isAdmin = ref(false);
const config = useRuntimeConfig();

const {
  data: constructions,
  pending: isLoading,
  error,
} = await useAsyncData<ConstructionResponse[]>("constructions", () =>
  $fetch(`${config.public.apiUrl}/constructions`)
);

const fallbackData: ConstructionResponse[] = [
  {
    id: 1,
    place: "전남 여수시 돌산읍",
    period: "2024.01 ~ 2024.04",
    description: "해안도로 배수로 정비 공사",
    is_published: true,
    created_at: new Date("2024-01-15").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 150000000,
  },
  {
    id: 2,
    place: "전남 순천시 해룡면",
    period: "2023.12 ~ 2024.02",
    description: "순천만 습지 보호구역 하수관 설치",
    is_published: true,
    created_at: new Date("2023-12-01").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 90000000,
  },
  {
    id: 3,
    place: "전남 목포시 용해동",
    period: "2023.10 ~ 2023.11",
    description: "목포 항구 주변 도로 보강 공사",
    is_published: true,
    created_at: new Date("2023-10-10").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 70000000,
  },
  {
    id: 4,
    place: "전남 나주시 금천면",
    period: "2023.08 ~ 2023.09",
    description: "농업용수 공급을 위한 관로 설치",
    is_published: true,
    created_at: new Date("2023-08-20").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 45000000,
  },
  {
    id: 5,
    place: "전남 광양시 중마동",
    period: "2024.02 ~ 2024.05",
    description: "광양제철소 인근 배수시설 개선 공사",
    is_published: true,
    created_at: new Date("2024-02-05").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 180000000,
  },
  {
    id: 6,
    place: "전남 담양군 담양읍",
    period: "2023.11 ~ 2023.12",
    description: "죽녹원 주변 보행로 정비",
    is_published: true,
    created_at: new Date("2023-11-15").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 60000000,
  },
  {
    id: 7,
    place: "전남 장흥군 장흥읍",
    period: "2023.09 ~ 2023.10",
    description: "탐진강 제방 보강 공사",
    is_published: true,
    created_at: new Date("2023-09-25").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 85000000,
  },
  {
    id: 8,
    place: "전남 화순군 화순읍",
    period: "2024.03 ~ 2024.06",
    description: "화순 온천지구 하수처리시설 확장",
    is_published: true,
    created_at: new Date("2024-03-01").toISOString(),
    thumbnail: "/img/main4.png",
    total_price: 130000000,
  },
];

const displayedConstructions = computed(() => {
  return constructions.value?.length ? constructions.value : fallbackData;
});

const selectedConstruction = ref<ConstructionResponse | null>(null);
const showPopup = ref(false);
const openPopup = (item: ConstructionResponse) => {
  selectedConstruction.value = item;
  showPopup.value = true;
};
const closePopup = () => {
  showPopup.value = false;
};

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
  <div class="works-page">
    <section class="projects fade-up section-muted">
      <h2 class="projects-title">시공 사례</h2>
      <div class="projects-grid">
        <ConstructionCard
          v-for="item in displayedConstructions"
          :key="item.id"
          :place="item.place"
          :period="item.period"
          :description="item.description"
          :thumbnail="item.thumbnail || '/img/placeholder.png'"
          :totalPrice="isAdmin ? item.total_price : undefined"
          :isAdmin="isAdmin"
          @click="openPopup(item)"
        />
      </div>
    </section>

    <div v-if="showPopup" class="modal-overlay" @click.self="closePopup">
      <div class="modal-content">
        <button class="close-btn" @click="closePopup">×</button>
        <h2>{{ selectedConstruction?.place }}</h2>
        <p>{{ selectedConstruction?.period }}</p>
        <img
          :src="selectedConstruction?.thumbnail || '/img/placeholder.png'"
          alt="thumbnail"
          class="modal-image"
        />

        <p>{{ selectedConstruction?.description }}</p>
        <p v-if="isAdmin">
          💰 {{ selectedConstruction?.total_price?.toLocaleString() }}원
        </p>
        <div v-if="isAdmin">
          <button class="edit-btn">수정하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.works-page {
  padding: 3rem 4rem;
  background: var(--background-base);
  color: var(--text-primary);
  min-height: 100vh;
  width: 100%;
}

.projects-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: var(--background-light);
  padding: 2rem 2.5rem;
  border-radius: 4px;
  width: 100%;
  max-width: 700px;
  position: relative;
  color: var(--text-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.modal-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
}

.modal-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.modal-content p:last-of-type {
  margin-bottom: 0;
}

.edit-btn {
  margin-top: 1.5rem;
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.edit-btn:hover {
  background: var(--accent-color-dark);
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: var(--text-secondary);
  cursor: pointer;
}
</style>
