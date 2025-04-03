<template>
  <div
    class="h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950"
  >
    <FloatingPaths
      lineColor="rgba(0, 0, 0, 0.3)"
      backgroundColor="transparent"
      :waveSpeedX="0.04"
      :waveSpeedY="0.02"
      :waveAmpX="40"
      :waveAmpY="10"
      :friction="0.95"
      :tension="0.1"
      :maxCursorMove="50"
      :xGap="24"
      :yGap="60"
    />
  </div>
</template>

<script lang="ts" setup>
import FloatingPaths from "@/components/FloatingPaths.vue";
//  lineColor: 선 색상 (CSS color 문자열, 예: "rgba(0, 0, 0, 0.3)")
// backgroundColor: 배경색 (canvas가 들어가는 div의 배경, "transparent" 추천)
// waveSpeedX: Perlin noise의 X 방향 이동 속도 (값이 클수록 좌우 파도 흐름이빨라짐)
// waveSpeedY: Perlin noise의 Y 방향 이동 속도 (값이 클수록 위아래 파도흐름이 빨라짐)
// waveAmpX: 파동의 가로 진폭 (값이 클수록 좌우 흔들림 강도 증가)
// waveAmpY: 파동의 세로 진폭 (값이 클수록 위아래 흔들림 강도 증가)
// friction:감쇠 계수 (값이 1에 가까울수록 파동이 오래 지속됨, 0.8~0.95 사이 추천)
// tension: 탄성 계수 (작을수록 천천히 원위치로 돌아가 부드럽게 움직임)
// maxCursorMove: 커서 영향 범위의 최대 이동 거리 제한 (값이 크면 마우스 영향이넓어짐)
// xGap: 각 세로 줄 사이의 간격 (작을수록 줄 개수가 많아지고 디테일증가, 성능 부담 커짐)
// yGap: 각 줄의 점 간격 (작을수록 선 하나가 더 부드러운곡선을 그림, 성능 부담 커짐)
</script>
