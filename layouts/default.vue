<script lang="ts" setup></script>

<template>
  <div>
    <Cursur />
    <header>
      <Navbar />
    </header>
    <slot>
      <NuxtPage />
    </slot>
    <footer><Footer /></footer>
  </div>
</template>
