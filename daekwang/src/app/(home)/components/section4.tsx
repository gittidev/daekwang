import Footer from "../../../components/Footer";
import KakaoMap from "@/components/KaKaoMap";

const Section4 = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-full flex-grow flex items-center justify-center">
        <KakaoMap />
      </div>

      <Footer />
    </div>
  );
};

export default Section4;
