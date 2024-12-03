import Image from "next/image";
import { IMAGE_PATHS } from "../constants/LandingImages";
import WhiteLogo from "public/whiteLogo.svg";

const Section1 = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-primary overflow-hidden">
      {/* 배경 이미지 */}
      <div className="relative h-full w-full">
        <Image
          src={IMAGE_PATHS.MAIN}
          alt="main"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
          priority={true}
        />
      </div>

      {/* 컨텐츠 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* 로고 자리 */}
        <div className="mb-6">
          <div className="w-16 h-16 flex items-center justify-center">
            <WhiteLogo className="flex-shrink-0 w-20 h-20" />
          </div>
        </div>

        {/* 회사명 */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          대광 PC
        </h1>
        <h2 className="text-gray-300 text-lg md:text-2xl font-light mb-8">
          DaeKwang Precast Concrete Installation
        </h2>

        {/* 슬로건 */}
        <p className="text-white text-lg md:text-2xl font-medium">
          정확한 시공, 믿을 수 있는 결과. <br /> 한 박스씩 쌓아가는 신뢰와 품질.
        </p>
      </div>
    </div>
  );
};

export default Section1;
