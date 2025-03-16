<template>
  <div class="default-layout">
    <nav class="fixed-nav">
      <Navbar />
    </nav>

    <v-main class="main">
      <slot />
    </v-main>

    <Footer />
  </div>
  <Cursur />
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--main-bg);
}

/* 네비게이션 바 기본 스타일 */
.fixed-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

/* 숨길 때 적용 */
.hidden-nav {
  transform: translateY(-100%);
}
</style>
