<template>
  <div class="construction-card">
    <div v-if="thumbnail" class="thumbnail">
      <NuxtImg :src="thumbnail" :alt="place" />
    </div>
    <div class="content">
      <h3 class="place">{{ place }}</h3>
      <p class="period">{{ period }}</p>
      <p class="description">{{ description }}</p>
      <p v-if="isAdmin && totalPrice" class="price">
        {{ formatPrice(totalPrice) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  place: string;
  period: string;
  description: string;
  thumbnail?: string;
  totalPrice?: number;
  isAdmin?: boolean;
}>();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);
};
</script>

<style scoped>
.construction-card {
  background: var(--background-soft);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px var(--shadow-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.construction-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px var(--shadow-color);
}

.thumbnail {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 1.5rem;
}

.place {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.period {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.price {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent-color);
  text-align: right;
}

@media (max-width: 768px) {
  .place {
    font-size: 1.2rem;
  }

  .price {
    font-size: 1rem;
  }

  .thumbnail {
    height: 160px;
  }
}
</style>
