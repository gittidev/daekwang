import Footer from "../../../components/Footer";
import Script from "next/script";

const KAKAOMAP_KEY = "1fd78490b5dee32d32599d28ea013811";

const Section4 = () => {
  <Script
    type="text/javascript"
    src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_KEY}`}
  />;
  return (
    <div className="h-screen flex flex-col">
      <div className="h-full flex-grow flex items-center justify-center">
        <div id="map" className="w-[500px] h-[400px]"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Section4;
