<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
import * as THREE from "three";

const path = "/models/precast_concrete_box_texture.glb";
const { scene } = await useGLTF(path, { draco: true });

scene.traverse((child) => {
  if (child instanceof THREE.Mesh) {
    const materialName = child.material.name;

    // Black 머티리얼인 경우
    if (materialName === "Black") {
      child.material = child.material.clone();
      child.material.color.set("#353535"); // 진회색
      child.material.roughness = 1.0;
    }

    // Black 이외 머티리얼
    if (materialName !== "Black") {
      child.material.color.set("#e4e4e4"); // 연한 회색
      child.material.roughness = 0.7;
    }

    child.material.needsUpdate = true;
  }
});
</script>

<template>
  <primitive
    :object="scene"
    :scale="[0.8, 1.8, 0.8]"
    :position="[0, 0, 0]"
    :rotation="[-Math.PI / 2, -Math.PI / 2, 0]"
  >
  </primitive>
</template>
