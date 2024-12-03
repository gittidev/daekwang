import ImageCard from "./ImageCard";
import { IMAGE_PATHS } from "@/app/(home)/constants/LandingImages";

const Section2 = () => {
  return (
    <div className="w-full px-4 md:px-12 py-12 pt-20 min-h-screen flex flex-col justify-center">
      {/* 상단 서비스 설명 */}
      <div className="text-center mb-12 flex-grow-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          광주 전남 권역 PC 암거 설치 전문
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          해수통로구, 오수통로구, 수직시공 가능 <br />
          고객의 요구에 맞는 완벽한 시공을 제공합니다.
        </p>
      </div>

      {/* 이미지 섹션 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        <ImageCard
          src={IMAGE_PATHS.MAIN_1}
          alt="Service 1"
          label="해수통로구"
        />
        <ImageCard
          src={IMAGE_PATHS.MAIN_2}
          alt="Service 2"
          label="오수통로구"
        />
        <ImageCard
          src={IMAGE_PATHS.MAIN_3}
          alt="Service 3"
          label="수직시공 가능"
        />
      </div>
    </div>
  );
};

export default Section2;
