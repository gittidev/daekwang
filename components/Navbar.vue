<script lang="ts" setup>
import { ref } from "vue";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Works", to: "/works" },
];

const drawer = ref(false);
</script>

<template>
  <v-app-bar class="nav-bar" app color="primary">
    <v-container
      class="nav-content d-flex justify-space-between align-center"
      active-class="none"
    >
      <div class="nav-logo">
        <NuxtLink to="/">
          <NuxtImg
            src="/logo.svg"
            alt="Logo"
            class="logo"
            sizes="xs:150px sm:180px md:200px"
          />
        </NuxtLink>
        <h1>대광 PC</h1>
      </div>

      <!-- 데스크탑 네비게이션 메뉴 -->
      <div class="nav-menu d-none d-md-flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="none"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </v-container>

    <!-- 모바일 메뉴 버튼 -->
    <v-app-bar-nav-icon
      class="d-md-none"
      @click.stop="drawer = !drawer"
      active-class="none"
    ></v-app-bar-nav-icon>

    <!-- 모바일 네비게이션 -->
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      class="drawer"
      height="100vh"
      width="280"
      color="primary"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link-mobile"
          @click="drawer = false"
          active-class="none"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<style lang="postcss" scoped>
/* 네비게이션 바 스타일 */
.nav-bar {
  padding: 10px;
}

/* 로고 스타일 */
.nav-logo {
  display: flex;
  align-items: center;
}

.logo {
  max-height: 50px;
}

h1 {
  font-size: 32px;
  margin-left: 10px;
}

/* 네비게이션 메뉴 */
.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--primary-color);
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-color);
}

/* 모바일 드로어 스타일 */
.drawer {
  height: 100vh !important;
  width: 280px;
  border-top-left-radius: 10px;
}

/* 모바일 네비게이션 링크 */
.nav-link-mobile {
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  min-height: 60px; /* 항목이 너무 작아지지 않도록 설정 */
  color: var(--primary-color);
}
</style>
