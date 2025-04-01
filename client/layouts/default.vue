<template>
  <div class="default-layout">
    <!-- 네비게이션 바 -->
    <nav class="fixed-nav">
      <Navbar />
    </nav>

    <!-- 메인 컨텐츠 -->
    <v-main class="main">
      <slot />
    </v-main>

    <!-- 푸터 -->
    <Footer />
  </div>
  <Cursur />
</template>

<style scoped>
/* 전체 레이아웃: 세로 정렬 */
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 최소 높이를 화면 높이로 설정 */
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  background-color: var(--main-bg);
}

/* 네비게이션 바 고정 */
.fixed-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

/* 메인 콘텐츠 영역 */
.main {
  flex-grow: 1;
  padding-top: 60px;
}
</style>
