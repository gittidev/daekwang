<template>
  <div class="default-layout">
    <nav class="fixed-nav">
      <Navbar />
    </nav>

    <v-main class="main">
      <slot />
      <Footer />
    </v-main>
  </div>
  <Cursur />
</template>

<style scoped>
.default-layout {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
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

.main {
  padding-top: 60px;
}
</style>
