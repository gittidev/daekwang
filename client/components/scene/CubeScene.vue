<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, ScrollControls, Stars } from "@tresjs/cientos";
import PipeModel from "../model/PipeModel.vue";
import { ref } from "vue";
import { vLightHelper } from "@tresjs/core";

const progress = ref(0);
</script>

<template>
  <TresCanvas clear-color="#0e0013">
    <Stars />
    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight cast-shadow :position="[10, 5, -8]" :intensity="4" />
    <TresPerspectiveCamera :position="[4, 3, 4]" :look-at="[0, 0, 0]" />
    <Suspense>
      <PipeModel />
    </Suspense>
    <OrbitControls
      :enable-zoom="false"
      :enable-pan="false"
      :enable-rotate="true"
    />
    <ScrollControls
      :pages="10"
      :distance="4"
      :smooth-scroll="0.5"
      class="none"
    />
  </TresCanvas>
</template>

<style scoped></style>
