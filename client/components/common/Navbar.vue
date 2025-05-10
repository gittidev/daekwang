<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { useRouter, useRoute } from "vue-router";

const navItems = [
  { label: "홈", to: "/" },
  { label: "시공사례", to: "/works" },
  { label: "문의하기", to: "/contact" },
];

const drawer = ref(false);
const { mobile } = useDisplay();
const router = useRouter();
const route = useRoute();

function navigate(to: string) {
  // 드로어가 열려 있으면 닫고
  drawer.value = false;
  // 다른 경로일 때만 push
  if (route.fullPath !== to) {
    router.push(to);
  }
}
</script>

<template>
  <v-app-bar app flat color="#2e2e2e" class="px-6 text-white elevation-2">
    <v-container class="d-flex justify-space-between align-center">
      <!-- 로고 -->
      <div
        class="d-flex align-center cursor-pointer"
        style="flex-shrink: 0"
        @click="navigate('/')"
      >
        <img src="/logo.svg" alt="Logo" style="height: 20px" />
        <h1 class="ml-3 text-xl font-weight-bold text-white">대광PC</h1>
      </div>

      <!-- 데스크탑 메뉴 -->
      <v-row
        v-show="!mobile"
        class="d-md-flex align-center"
        style="flex: 1 1 auto; justify-content: center"
      >
        <span
          v-for="item in navItems"
          :key="item.to"
          class="mx-3 text-white text-body-2 font-weight-medium hover:text-orange-accent-2 transition cursor-pointer"
          @click="navigate(item.to)"
        >
          {{ item.label }}
        </span>
      </v-row>

      <!-- 햄버거 버튼 -->
      <v-btn icon class="d-md-none text-white" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- 모바일 드로어 -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="bg-grey-darken-4 text-white d-md-none"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        @click="navigate(item.to)"
      >
        <v-list-item-title class="text-white font-weight-medium">
          {{ item.label }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
