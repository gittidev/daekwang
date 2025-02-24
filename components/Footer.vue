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
        center: new kakao.maps.LatLng(35.17385806633973, 126.8106037272048), //지도의 중심좌표.
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
  <div class="footer">
    <container class="contact-container">
      <div class="logo">
        <NuxtImg src="/logo_line.svg" alt="로고" width="100px" />
        <h1>대광PC</h1>
      </div>
      <div class="contact-wrapper">
        <h1 class="contact-title">CONTACT US</h1>
        <div class="contact-subtitle">
          <div class="contact-content">
            <div>
              <h2>_PHONE</h2>
              <p>010-2684-6408</p>
              <h2>_EMAIL</h2>
              <p>pyw4733@hanmail.net</p>
              <h2>_FAX</h2>
              <p>062-961-6408</p>
            </div>
          </div>
          <div class="contact-content">
            <h2>_ADDRESS</h2>
            <p>광주광역시 광산구 사암로 340번길 30</p>
            <ClientOnly>
              <div id="map" class="map-container"></div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </container>
    <div class="license">
      <p>© 1994 대광PC. All Rights Reserved.</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background: var(--main-bg);
  overflow: hidden;
}

.contact-container {
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  padding: 3rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 10px 40px var(--shadow-color);
  backdrop-filter: blur(15px);
  color: var(--main-font-color);
  gap: 4rem;
  transition: transform 0.3s ease;
}

.contact-container:hover {
  transform: translateY(-5px);
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo h1 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
}

.contact-wrapper {
  flex: 1;
  width: 100%;
}

.contact-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--main-font-color);
  text-shadow: var(--text-shadow);
}

.contact-subtitle {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  width: 100%;
}

.contact-content h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  color: var(--secondary-color);
  text-transform: uppercase;
}

.contact-content p {
  font-size: 1rem;
  margin: 0.3rem 0;
  opacity: 0.9;
  color: var(--accent-color);
  line-height: 1.6;
}

.map-container {
  width: 100%;
  height: 250px;
  max-width: 800px;
  border-radius: 15px;
  box-shadow: 0 4px 20px var(--shadow-color);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
  background: var(--sub-bg);
}

.map-container:hover {
  transform: scale(1.02);
}

.license {
  margin-top: 2rem;
  text-align: center;
}

.license p {
  font-size: 0.8rem;
  opacity: 0.7;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }

  .contact-subtitle {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .map-container {
    height: 200px;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-subtitle {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 150px;
    max-width: 100%;
  }
}
</style>
