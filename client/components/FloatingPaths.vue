<template>
  <div
    ref="containerRef"
    class="absolute top-0 left-0 w-full h-full overflow-hidden"
    :style="{ backgroundColor }"
  >
    <div
      class="absolute top-0 left-0 rounded-full w-2 h-2 bg-foreground/10"
      :style="cursorStyle"
    />
    <canvas ref="canvasRef" class="block w-full h-full" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { Noise } from "@/lib/noise";
import { computed } from "vue";

const props = defineProps({
  lineColor: { type: String, default: "hsl(var(--foreground))" },
  backgroundColor: { type: String, default: "transparent" },
  waveSpeedX: { type: Number, default: 0.0125 },
  waveSpeedY: { type: Number, default: 0.005 },
  waveAmpX: { type: Number, default: 32 },
  waveAmpY: { type: Number, default: 16 },
  xGap: { type: Number, default: 30 },
  yGap: { type: Number, default: 48 },
  friction: { type: Number, default: 0.925 },
  tension: { type: Number, default: 0.005 },
  maxCursorMove: { type: Number, default: 100 },
  className: String,
});

const containerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const ctxRef = ref<CanvasRenderingContext2D | null>(null);
const boundingRef = ref({ width: 0, height: 0, left: 0, top: 0 });

const linesRef = ref<any[][]>([]);
const noiseRef = ref(new Noise(Math.random()));
const mouseRef = ref({
  x: -10,
  y: 0,
  lx: 0,
  ly: 0,
  sx: 0,
  sy: 0,
  v: 0,
  vs: 0,
  a: 0,
  set: false,
});

let animationFrame: number;

const cursorStyle = computed(() => ({
  transform: `translate3d(calc(${mouseRef.value.sx}px - 50%), calc(${mouseRef.value.sy}px - 50%), 0)`,
  willChange: "transform",
}));

function setSize() {
  const container = containerRef.value;
  const canvas = canvasRef.value;
  if (!container || !canvas) return;
  const bounds = container.getBoundingClientRect();
  boundingRef.value = bounds;
  canvas.width = bounds.width;
  canvas.height = bounds.height;
}

function setLines() {
  const { width, height } = boundingRef.value;
  const oWidth = width + 200,
    oHeight = height + 30;
  const totalLines = Math.ceil(oWidth / props.xGap);
  const totalPoints = Math.ceil(oHeight / props.yGap);
  const xStart = (width - props.xGap * totalLines) / 2;
  const yStart = (height - props.yGap * totalPoints) / 2;

  linesRef.value = [];
  for (let i = 0; i <= totalLines; i++) {
    const pts = [];
    for (let j = 0; j <= totalPoints; j++) {
      pts.push({
        x: xStart + props.xGap * i,
        y: yStart + props.yGap * j,
        wave: { x: 0, y: 0 },
        cursor: { x: 0, y: 0, vx: 0, vy: 0 },
      });
    }
    linesRef.value.push(pts);
  }
}

function updateMouse(x: number, y: number) {
  const bounds = boundingRef.value;
  const m = mouseRef.value;
  m.x = x - bounds.left;
  m.y = y - bounds.top + window.scrollY;
  if (!m.set) {
    m.sx = m.x;
    m.sy = m.y;
    m.lx = m.x;
    m.ly = m.y;
    m.set = true;
  }
}

function movePoints(time: number) {
  const mouse = mouseRef.value;
  const lines = linesRef.value;
  const noise = noiseRef.value;

  lines.forEach((pts) => {
    pts.forEach((p) => {
      const move =
        noise.perlin2(
          (p.x + time * props.waveSpeedX) * 0.002,
          (p.y + time * props.waveSpeedY) * 0.0015
        ) * 12;
      p.wave.x = Math.cos(move) * props.waveAmpX;
      p.wave.y = Math.sin(move) * props.waveAmpY;

      const dx = p.x - mouse.sx;
      const dy = p.y - mouse.sy;
      const dist = Math.hypot(dx, dy);
      const l = Math.max(175, mouse.vs);

      if (dist < l) {
        const s = 1 - dist / l;
        const f = Math.cos(dist * 0.001) * s;
        //마우스 영향 정도
        p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00025;
        p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00025;
      }

      p.cursor.vx += (0 - p.cursor.x) * props.tension;
      p.cursor.vy += (0 - p.cursor.y) * props.tension;
      p.cursor.vx *= props.friction;
      p.cursor.vy *= props.friction;
      p.cursor.x += p.cursor.vx * 2;
      p.cursor.y += p.cursor.vy * 2;

      p.cursor.x = Math.max(
        -props.maxCursorMove,
        Math.min(props.maxCursorMove, p.cursor.x)
      );
      p.cursor.y = Math.max(
        -props.maxCursorMove,
        Math.min(props.maxCursorMove, p.cursor.y)
      );
    });
  });
}

function drawLines() {
  const { width, height } = boundingRef.value;
  const ctx = ctxRef.value;
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.strokeStyle = props.lineColor;

  linesRef.value.forEach((points) => {
    let p1 = moved(points[0], false);
    ctx.moveTo(p1.x, p1.y);
    points.forEach((p, idx) => {
      const isLast = idx === points.length - 1;
      p1 = moved(p, !isLast);
      const p2 = moved(points[idx + 1] || points[points.length - 1], !isLast);
      ctx.lineTo(p1.x, p1.y);
      if (isLast) ctx.moveTo(p2.x, p2.y);
    });
  });

  ctx.stroke();
}

function moved(p: any, withCursor = true) {
  const x = p.x + p.wave.x + (withCursor ? p.cursor.x : 0);
  const y = p.y + p.wave.y + (withCursor ? p.cursor.y : 0);
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}

function tick(time: number) {
  const m = mouseRef.value;
  m.sx += (m.x - m.sx) * 0.1;
  m.sy += (m.y - m.sy) * 0.1;

  const dx = m.x - m.lx;
  const dy = m.y - m.ly;
  const d = Math.hypot(dx, dy);
  m.v = d;
  m.vs += (d - m.vs) * 0.1;
  m.vs = Math.min(100, m.vs);
  m.lx = m.x;
  m.ly = m.y;
  m.a = Math.atan2(dy, dx);

  movePoints(time);
  drawLines();
  animationFrame = requestAnimationFrame(tick);
}

onMounted(() => {
  const canvas = canvasRef.value;
  ctxRef.value = canvas?.getContext("2d") ?? null;

  setSize();
  setLines();
  requestAnimationFrame(tick);

  window.addEventListener("resize", setSize);
  window.addEventListener("mousemove", (e) => updateMouse(e.pageX, e.pageY));
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
  window.removeEventListener("resize", setSize);
  window.removeEventListener("mousemove", (e) => updateMouse(e.pageX, e.pageY));
});
</script>
