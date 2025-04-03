<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import ConstructionCard from "~/components/ConstructionCard.vue";
import { useAsyncData } from "#app";
import type {
  ConstructionPublicResponse,
  ConstructionAdminResponse,
} from "~/types/construction";

const isAdmin = ref(true);

const {
  data: constructions,
  pending: isLoading,
  error,
} = await useAsyncData<
  ConstructionPublicResponse[] | ConstructionAdminResponse[]
>("constructions", () => $fetch("/api/constructions"));

const fallbackData: (ConstructionPublicResponse | ConstructionAdminResponse)[] =
  [
    {
      id: 1,
      place: "서울 강남구 논현동",
      period: "2024.01 ~ 2024.03",
      description: "지하 배수로 및 보강 공사",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/1.png",
      total_price: 120000000,
    },
    {
      id: 2,
      place: "광주 북구 매곡동",
      period: "2023.11 ~ 2023.12",
      description: "도심 하수관 교체 사업",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/2.png",
      total_price: 80000000,
    },
    {
      id: 3,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
    {
      id: 4,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
    {
      id: 5,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
    {
      id: 6,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
    {
      id: 6,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
    {
      id: 6,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
    {
      id: 6,
      place: "전남 목포시 산정동",
      period: "2023.09 ~ 2023.10",
      description: "주택가 암거 설치",
      is_published: true,
      created_at: new Date().toISOString(),
      thumbnail: "/img/3.png",
      total_price: 50000000,
    },
  ];

const displayedConstructions = computed(() => {
  return constructions.value?.length ? constructions.value : fallbackData;
});

const selectedConstruction = ref<
  ConstructionPublicResponse | ConstructionAdminResponse | null
>(null);
const showPopup = ref(false);
const openPopup = (
  item: ConstructionPublicResponse | ConstructionAdminResponse
) => {
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
        <img
          :src="selectedConstruction?.thumbnail || '/img/placeholder.png'"
          alt="thumbnail"
          class="modal-image"
        />
        <p>{{ selectedConstruction?.description }}</p>
        <p>{{ selectedConstruction?.period }}</p>
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
  padding: 6rem;
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
  gap: 1rem;
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
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
}

.modal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.edit-btn {
  margin-top: 1rem;
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
</style>
