<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import {
  OrbitControls,
  SoftShadows,
  ContactShadows,
  SVG as MySVG,
} from "@tresjs/cientos";
import PipeModel from "../model/PipeModel.vue";
import { onUnmounted } from "vue";

onUnmounted(() => {
  // 1) 씬에 남은 모든 Mesh의 geometry·material 해제
  scene.value.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.geometry.dispose();
      const mat = obj.material;
      if (Array.isArray(mat)) {
        mat.forEach((m) => m.dispose());
      } else {
        mat.dispose();
      }
    }
  });

  // 2) 내부 렌더러 캐시(렌더 리스트)와 렌더러 자체 해제
  renderer.value.renderLists.dispose();
  renderer.value.dispose();

  // 3) 브라우저 WebGL 컨텍스트 강제 종료
  const ctx = gl.value.getContext();
  const loseExt = ctx.getExtension("WEBGL_lose_context");
  if (loseExt) loseExt.loseContext();
});
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
