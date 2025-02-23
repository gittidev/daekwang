<script setup lang="ts">
import { ref } from "vue";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Works", to: "/works" },
];

const menuOpen = ref(false);
</script>

<template>
  <header
    class="fixed top-0 w-full glassmorphism px-6 py-4 flex justify-between items-center z-50"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="Logo" class="h-10" />
      </NuxtLink>
      <h1 class="text-2xl font-bold text-white ml-4">대광 PC</h1>
    </div>

    <!-- 데스크탑 메뉴 -->
    <nav class="hidden md:flex space-x-6">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="text-white font-semibold hover:text-accent"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <!-- 햄버거 메뉴 버튼 -->
    <button
      class="md:hidden text-white"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle Menu"
    >
      <svg
        v-if="!menuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </header>

  <!-- 풀스크린 모바일 메뉴 -->
  <transition name="fade">
    <div
      v-if="menuOpen"
      class="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center"
    >
      <nav class="flex flex-col space-y-8 text-center">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-2xl text-white font-bold"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
