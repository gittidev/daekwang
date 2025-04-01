<template>
  <canvas ref="canvas" class="fixed top-0 left-0 w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as THREE from "three";

import fragShader from "@/assets/shaders/interact.frag";
import vertShader from "@/assets/shaders/interact.vert";

const canvas = ref<HTMLCanvasElement | null>(null);
const mouse = new THREE.Vector2();
onMounted(() => {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value!,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  camera.position.set(0, 0, 10);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  const uniforms = {
    u_time: { value: 0.0 },
    u_resolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    u_mouse: { value: new THREE.Vector2(0, 0) },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: vertShader,
    fragmentShader: fragShader,
    uniforms,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);
    uniforms.u_time.value = clock.getElapsedTime(); // 시간에 따른 애니메이션
    renderer.render(scene, camera);
  };

  animate();

  // 마우스 이벤트 처리 (마우스 좌표 업데이트)
  window.addEventListener("mousemove", (e) => {
    uniforms.u_mouse.value.x = e.clientX;
    uniforms.u_mouse.value.y = window.innerHeight - e.clientY;
  });

  // 화면 크기 조정시 처리
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  });
});
</script>
