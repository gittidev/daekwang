<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    kakao.maps.load(this.initMap);
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(35.17385806633973, 126.8106037272048),
        level: 4,
      };
      var map = new kakao.maps.Map(container, options);
      var markerPosition = new kakao.maps.LatLng(
        35.17385806633973,
        126.8106037272048
      );
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      this.map = map;
      marker.setMap(map);
    },
  },
};
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
  padding: 2rem 0;
  background: transparent;
  color: var(--main-font-color);
}

.contact-container {
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  border-top: 1px solid var(--border-color);
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
}

.contact-wrapper {
  flex: 1;
  min-width: 250px;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--secondary-color);
}

.map {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  margin-top: 1rem;
}

.license {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-align: center;
}

/* 반응형 */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-content {
    align-items: center;
  }

  .map {
    height: 180px;
    width: 100%;
  }
}
</style>
