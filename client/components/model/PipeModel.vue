<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import { useGLTF } from "@tresjs/cientos";
import { useTresContext } from "@tresjs/core";
import * as THREE from "three";

// 1) 모델 로드
const path = "/models/precast_concrete_box_texture.glb";
const { scene: modelScene } = await useGLTF(path, { draco: true });

// 2) Tres 렌더러만 가져오기 (컨텍스트 프로바이더는 TresCanvas 안에 이미 설정됨)
let renderer;
try {
  ({ renderer } = useTresContext());
} catch {
  console.warn("TresContext를 찾을 수 없습니다 – 렌더러 정리는 건너뜁니다.");
}

// 3) 모델 머티리얼 커스터마이징
modelScene.traverse((child) => {
  if (child instanceof THREE.Mesh) {
    const mat = child.material as THREE.MeshStandardMaterial;
    if (mat.name === "Black") {
      mat = mat.clone();
      mat.color.set("#353535");
      mat.roughness = 1.0;
    } else {
      mat.color.set("#e4e4e4");
      mat.roughness = 0.7;
    }
    mat.needsUpdate = true;
    child.material = mat;
  }
});

// 4) 언마운트 시 모델만 정리
onBeforeUnmount(() => {
  // 4-1) 씬 트래버스하면서 메시·지오메트리·머티리얼 해제
  modelScene.traverse((obj: THREE.Object3D) => {
    if ((obj as any).isMesh) {
      const mesh = obj as THREE.Mesh;
      mesh.geometry.dispose();
      const m = mesh.material;
      if (Array.isArray(m)) {
        m.forEach((mat) => mat.dispose());
      } else {
        m.dispose();
      }
    }
  });

  // 4-2) (옵션) Tres 렌더러까지 완전히 끊어야 할 경우
  if (renderer?.value) {
    try {
      renderer.value.renderLists?.dispose();
      renderer.value.dispose();
      const glCtx = renderer.value.getContext();
      glCtx.getExtension("WEBGL_lose_context")?.loseContext();
    } catch (e) {
      console.warn("TresRenderer 정리 중 에러:", e);
    }
  }
});
</script>

<template>
  <primitive
    :object="modelScene"
    :scale="[0.8, 1.8, 0.8]"
    :position="[0, 0, 0]"
    :rotation="[-Math.PI / 2, -Math.PI / 2, 0]"
  />
</template>
