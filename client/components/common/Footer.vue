<script setup>
import { onMounted, ref } from "vue";
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const kakaoApiKey = config.public.kakaoApiKey;
const mapContainer = ref(null);

const loadKakaoMap = () => {
  if (typeof window !== "undefined" && window.kakao) {
    kakao.maps.load(initMap);
    return;
  }
  const script = document.createElement("script");
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&libraries=services&autoload=false`;
  script.onload = () => kakao.maps.load(initMap);
  document.head.appendChild(script);
};

const initMap = () => {
  if (!mapContainer.value) return;

  const options = {
    center: new kakao.maps.LatLng(35.17385806633973, 126.8106037272048),
    level: 4,
  };

  const map = new kakao.maps.Map(mapContainer.value, options);

  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(35.17385806633973, 126.8106037272048),
    map: map,
  });
};

onMounted(() => {
  loadKakaoMap();
});
</script>

<template>
  <footer class="footer">
    <div class="contact-container">
      <div class="logo">
        <NuxtImg src="/logo_line.svg" alt="로고" width="80px" />
        <h1>대광PC</h1>
      </div>

      <div class="contact-wrapper">
        <h2 class="contact-title">CONTACT US</h2>
        <div class="contact-content">
          <div>
            <p><strong>전화:</strong> 010-2684-6408</p>
            <p><strong>이메일:</strong> pyw4733@hanmail.net</p>
            <p><strong>사업자 등록번호:</strong> 411-10-82273</p>
            <p><strong>팩스:</strong> 062-961-6408</p>
            <p><strong>주소:</strong> 광주광역시 광산구 사암로 340번길 30</p>
          </div>
          <ClientOnly>
            <div ref="mapContainer" class="map"></div>
          </ClientOnly>
        </div>
      </div>
    </div>
    <p class="license">© 1994 대광PC. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background: var(--background-muted);
  color: var(--text-primary);
}
.contact-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--border-color);
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.logo h1 {
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent-color);
  white-space: nowrap;
}

.contact-wrapper {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 1rem;
  color: var(--text-secondary);
}

.contact-content > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 220px;
}

.map {
  width: 350px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--background-soft);
}

/* 하단 */
.license {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: var(--text-muted, var(--text-secondary));
  text-align: center;
}

/* ✅ 반응형 */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo {
    flex-direction: column;
    justify-content: center;
  }

  .contact-content {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .map {
    width: 100%;
    height: 200px;
  }
}
</style>
