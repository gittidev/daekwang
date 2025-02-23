<script lang="ts" setup></script>

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

<style lang="postcss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--main-bg);
}
.fixed-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
