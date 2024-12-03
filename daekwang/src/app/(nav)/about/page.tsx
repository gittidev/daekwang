import Image from "next/image";
import { IMAGE_PATHS } from "@/app/(home)/constants/LandingImages";

const About = () => {
  return (
    <div className="w-full px-4 md:px-12 py-12">
      {/* 상단 서비스 설명 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          광주 전남 권역 PC 암거 설치 전문
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          해수통로구, 오수통로구, 수직시공 가능 <br />
          고객의 요구에 맞는 완벽한 시공을 제공합니다.
        </p>
      </div>

      {/* 이미지 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 이미지 1 */}
        <div className="relative group">
          <Image
            src={IMAGE_PATHS.MAIN_1}
            alt="Service 1"
            className="rounded-lg object-cover"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-xl font-semibold">해수통로구</p>
          </div>
        </div>

        {/* 이미지 2 */}
        <div className="relative group">
          <Image
            src={IMAGE_PATHS.MAIN_2}
            alt="Service 2"
            className="rounded-lg object-cover"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-xl font-semibold">오수통로구</p>
          </div>
        </div>

        {/* 이미지 3 */}
        <div className="relative group">
          <Image
            src={IMAGE_PATHS.MAIN_3}
            alt="Service 3"
            className="rounded-lg object-cover"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-xl font-semibold">수직시공 가능</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
