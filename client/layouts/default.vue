<!-- layouts/default.vue -->
<template>
  <v-app>
    <CommonNavbar />

    <v-main>
      <slot />
    </v-main>

    <CommonFooter />
    <Cursur />
  </v-app>
</template>

<script setup lang="ts">
import CommonNavbar from "../components/common/Navbar.vue";
import CommonFooter from "../components/common/Footer.vue";
import Cursur from "../components/Cursur.vue";
</script>
