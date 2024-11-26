import concreateBg from "public/images/bg-concreate.jpg";
import installImg1 from "public/images/installation1.png";
import installImg2 from "public/images/installation2.png";
import { StaticImageData } from "next/image";

type SectionInfoType = {
  imgLink: StaticImageData;
  title: string;
  description: string;
};

const SectionInfo: SectionInfoType[] = [
  {
    imgLink: concreateBg,
    title: "견고하고 효율적인 프리캐스트 콘크리트",
    description:
      "프리캐스트 콘크리트는 높은 내구성과 빠른 설치로 비용과 시간을 절약할 수 있는 혁신적인 솔루션입니다. 대광PC는 최신 기술을 적용하여 고객의 요구에 맞춘 맞춤형 설치 서비스를 제공합니다.",
  },
  {
    imgLink: installImg1,
    title: "정확한 시공과 품질 보증",
    description:
      "대광PC는 숙련된 시공팀과 최신 장비를 활용하여 정밀하고 신속한 설치를 보장합니다. 모든 프로젝트는 엄격한 품질 관리 절차를 거쳐 고객의 신뢰를 얻고 있습니다.",
  },
  {
    imgLink: installImg2,
    title: "정확한 시공과 품질 보증",
    description:
      "대광PC는 숙련된 시공팀과 최신 장비를 활용하여 정밀하고 신속한 설치를 보장합니다. 모든 프로젝트는 엄격한 품질 관리 절차를 거쳐 고객의 신뢰를 얻고 있습니다.",
  },
];

export default SectionInfo;
