import Image from "next/image";

const ImageCard = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => {
  return (
    <div className="relative group w-full h-64 sm:h-72 lg:h-[420px] overflow-hidden rounded-lg">
      {/* 이미지 */}
      <Image
        src={src}
        alt={alt}
        className="object-cover group-hover:brightness-75 transition duration-300"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
      {/* 텍스트 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
