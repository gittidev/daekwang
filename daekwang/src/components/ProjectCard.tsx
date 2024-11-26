import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  src: StaticImageData;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, description }) => {
  return (
    <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="min-w-[120px] min-h-[120px] flex items-center justify-center overflow-hidden rounded-md bg-gray-100">
        <Image
          src={src}
          width={100}
          height={100}
          alt="project"
          className="object-cover"
        />
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Project Title</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
