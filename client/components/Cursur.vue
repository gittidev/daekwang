<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const cursorX = ref(0);
const cursorY = ref(0);
const cursorScale = ref(1);
const cursorColor = ref("rgba(255, 255, 255, 0.3)");

const updateCursor = (e: MouseEvent) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

const onMouseEnter = () => {
  cursorScale.value = 2;
  cursorColor.value = "#00ffea";
};

const onMouseLeave = () => {
  cursorScale.value = 1;
  cursorColor.value = "rgba(255, 255, 255, 0.3)";
};

onMounted(() => {
  window.addEventListener("mousemove", updateCursor);
  document.querySelectorAll("button, a, input, nav-item").forEach((el) => {
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
  });
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateCursor);
  document.querySelectorAll("button, a, input").forEach((el) => {
    el.removeEventListener("mouseenter", onMouseEnter);
    el.removeEventListener("mouseleave", onMouseLeave);
  });
});
</script>

<template>
  <div
    class="custom-cursor"
    :style="{
      left: cursorX + 'px',
      top: cursorY + 'px',
      transform: `translate(-50%, -50%) scale(${cursorScale})`,
      backgroundColor: cursorColor,
      filter: cursorScale > 1 ? 'blur(6px)' : 'none',
    }"
  ></div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.3s ease-out, background-color 0.2s ease-out;
  mix-blend-mode: screen;
  z-index: 9999;
}

.custom-cursor:hover {
  box-shadow: 0 0 25px 10px rgba(0, 220, 130, 0.7);
}
</style>
