<script setup lang="ts">
import { ref } from "vue";

// caseStudies의 타입 정의
interface CaseStudy {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const caseStudies = ref<CaseStudy[]>([
  {
    id: 1,
    title: "Modern Office Renovation",
    description: "Complete office space transformation",
    date: " 2024-03",
    image: "/img/1.png",
  },
  {
    id: 2,
    title: "Residential Complex",
    description: "Luxury apartment building",
    date: " 2024-03",
    image: "/img/2.png",
  },
  {
    id: 3,
    title: "Commercial Plaza",
    description: "Shopping center construction",
    date: " 2024-03",
    image: "/img/3.png",
  },
  {
    id: 4,
    title: "Commercial Plaza",
    description: "Shopping center construction",
    date: " 2024-03",
    image: "/img/3.png",
  },
  {
    id: 5,
    title: "Commercial Plaza",
    description: "Shopping center construction",
    date: " 2024-03",
    image: "/img/3.png",
  },
  {
    id: 6,
    title: "Commercial Plaza",
    description: "Shopping center construction",
    date: " 2024-03",
    image: "/img/3.png",
  },
  {
    id: 7,
    title: "Commercial Plaza",
    description: "Shopping center construction",
    date: " 2024-03",
    image: "/img/3.png",
  },
  {
    id: 8,
    title: "Commercial Plaza",
    description: "Shopping center construction",
    date: " 2024-03",
    image: "/img/3.png",
  },
]);

const selectedCase = ref<CaseStudy | null>(null);
const showPopup = ref(false);

const openPopup = (caseStudy: CaseStudy) => {
  selectedCase.value = { ...caseStudy };
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
  selectedCase.value = null;
};
</script>

<template>
  <div class="container">
    <div class="case-content">
      <h1>시공 사례</h1>
      <div class="case-grid">
        <div
          v-for="item in caseStudies"
          :key="item.id"
          class="case-card"
          @click="openPopup(item)"
        >
          <div class="card-image">
            <NuxtImg class="image-placeholder" :src="item.image" />
          </div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div v-if="showPopup" class="modal-overlay" @click="closePopup">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closePopup">×</button>
          <h2>{{ selectedCase?.title }}</h2>
          <div class="modal-image">
            <NuxtImg class="image-placeholder" :src="selectedCase?.image" />
          </div>
          <p>{{ selectedCase?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: var(--main-bg);
  min-height: 100vh;
  color: var(--main-font-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-content {
  max-width: 80%;
  width: 100%;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin: 2rem 0;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.case-card {
  background-color: var(--main-color);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-color) 0px 4px 12px;
}

.case-card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하며 채우기 */
}

.card-content {
  padding: 1rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: var(--primary-color);
}

p {
  margin: 0;
  color: var(--accent-color);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--shadow-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--main-color);
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 90%;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-color) 0px 4px 12px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  color: var(--primary-color);
  cursor: pointer;
}

.modal-image {
  width: 100%;
  height: 300px;
  margin: 1rem 0;
}

h2 {
  color: var(--primary-color);
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: var(--main-bg);
  }

  .case-card {
    background-color: var(--main-color);
  }

  .modal-content {
    background-color: var(--main-color);
  }
}
</style>
