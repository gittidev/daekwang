<!-- CaseCard.vue -->
<template>
  <div class="case-card">
    <div class="card-image">
      <NuxtImg :src="image" :alt="title" />
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  date: string;
}>();
</script>

<style scoped lang="postcss">
.case-card {
  background: var(--sub-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 100%;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px var(--shadow-color);
}

.card-image {
  width: 100%;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: filter 0.3s ease;
}

.case-card:hover .card-image img {
  filter: brightness(1);
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.card-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  text-shadow: var(--text-shadow);
}

.card-content p {
  font-size: 1rem;
  color: var(--accent-color);
  opacity: 0.9;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .card-image {
    height: 150px;
  }

  .card-content h3 {
    font-size: 1.3rem;
  }

  .card-content p {
    font-size: 0.9rem;
  }
}
</style>
