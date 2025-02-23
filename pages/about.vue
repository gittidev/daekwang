<script setup lang="ts"></script>

<template>
  <v-container class="about-container">
    <h1>광주/전남 지역</h1>
    <h1>PC BOX 설치 전문기업</h1>
  </v-container>
  <v-container class="about-container"> Page: about </v-container>
  <v-container class="about-container"> Page: about </v-container>
  <v-container class="about-container"> Page: about </v-container>
</template>

<style scoped>
.about-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
}

.about-container h1 {
  font-size: 4rem;
  font-weight: bold;
  color: var(--main-font-color);
}
</style>
