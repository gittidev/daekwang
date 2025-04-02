<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
import { TextureLoader } from "three";
import { OrbitControls } from "@tresjs/cientos";
import * as THREE from "three";

const path = "/models/pipe.glb";
const { scene } = await useGLTF(path, { draco: true });
const texture = new TextureLoader().load("/texture/concreateTexture2.jpg");
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
    child.material.map = texture;
    child.material.needsUpdate = true;
  }
});
</script>

<template>
  <TresMesh>
    <primitive
      :object="scene"
      :scale="[2, 2, 2]"
      :position="[0, 0, 0]"
      :rotation="[0, Math.PI / 2, 0]"
    />
    <TresMeshToonMaterial color="#82DBC5" />
  </TresMesh>
</template>
