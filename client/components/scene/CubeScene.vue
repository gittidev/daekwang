<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import {
  OrbitControls,
  SoftShadows,
  ContactShadows,
  SVG as MySVG,
} from "@tresjs/cientos";
import PipeModel from "../model/PipeModel.vue";
import { ref } from "vue";
</script>

<template>
  <TresCanvas clear-color="#0e0013" class="h-screen">
    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight cast-shadow :position="[10, 5, -8]" :intensity="4" />
    <TresPerspectiveCamera :position="[2, 2, 3]" :look-at="[0, 0, 0]" />

    <TresMesh>
      <Suspense>
        <PipeModel />
      </Suspense>
    </TresMesh>
    <ContactShadows :position-y="-1" color="#335" :scale="20" />
    <SoftShadows />
    <OrbitControls
      :autoRotate="true"
      :autoRotateSpeed="0.3"
      :enableDamping="true"
      :dampingFactor="0.05"
      :minDistance="1.5"
      :maxDistance="5"
    />
  </TresCanvas>
</template>

<style scoped></style>
