"use client";
import { useEffect } from "react";
import Script from "next/script";

const KakaoMap = () => {
  useEffect(() => {
    const initializeMap = () => {
      if (window.kakao) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566535, 126.977969),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      }
    };

    if (typeof window !== "undefined" && window.kakao) {
      initializeMap();
    } else {
      console.error("Kakao Maps API not loaded");
    }
  }, []);

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services,clusterer,drawing`}
        strategy="beforeInteractive"
        onLoad={() => console.log("Kakao Maps API loaded")}
      />
      <div id="map" className="w-full h-[400px]"></div>
    </>
  );
};

export default KakaoMap;
