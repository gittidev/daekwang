<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement, // Add this
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

// Chart.js 등록
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement, // Add this
  CategoryScale,
  LinearScale
);

// Props 정의
const props = defineProps<{
  data: { month: string; count: number }[];
}>();

// 차트 데이터 계산
const chartData = computed<ChartData<"line">>(() => ({
  labels: props.data.map((item) => item.month), // X축 라벨 (월)
  datasets: [
    {
      label: "월별 시공 건수",
      data: props.data.map((item) => item.count), // Y축 값 (건수)
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
}));

// 차트 옵션 정의
const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "월별 시공 건수" },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `시공 건수: ${tooltipItem.raw}`,
      },
    },
  },
  scales: {
    x: { type: "category" }, // 월별 카테고리
    y: { type: "linear", beginAtZero: true }, // 건수 (선형)
  },
};
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>
