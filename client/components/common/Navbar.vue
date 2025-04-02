<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";

const navItems = [
  { label: "홈", to: "/" },
  { label: "시공사례", to: "/works" },
  { label: "문의하기", to: "/contact" },
];

const drawer = ref(false);
const { mobile } = useDisplay();
const router = useRouter();

const navigate = (to: string) => {
  drawer.value = false;
  router.push(to);
};
</script>

<template>
  <v-app-bar app flat color="#2e2e2e" class="px-6 text-white elevation-2">
    <v-container class="d-flex justify-space-between align-center">
      <!-- 로고 (고정) -->
      <div class="d-flex align-center" style="flex-shrink: 0">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="Logo" style="height: 20px" />
        </NuxtLink>
        <h1 class="ml-3 text-subtitle-2 font-weight-bold text-orange-accent-4">
          대광PC
        </h1>
      </div>
      <ThemeToggle />
      <!-- 메뉴 (유동적으로 늘어남) -->
      <v-row
        v-show="!mobile"
        class="d-md-flex align-center"
        style="flex: 1 1 auto; justify-content: center"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="mx-3 text-white text-body-2 font-weight-medium hover:text-orange-accent-2 transition"
        >
          {{ item.label }}
        </NuxtLink>
      </v-row>

      <!-- 햄버거 (고정) -->
      <v-btn
        icon
        class="d-md-none text-white"
        @click="drawer = !drawer"
        style="flex-shrink: 0"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- ✅ 모바일 드로어: 오른쪽에서 나옴 & 배경 누르면 닫힘 -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="bg-grey-darken-4 text-white d-md-none"
    @click.self="drawer = false"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        @click="navigate(item.to)"
      >
        <span
          class="text-white text-subtitle-2 font-weight-medium cursor-pointer"
        >
          {{ item.label }}
        </span>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
