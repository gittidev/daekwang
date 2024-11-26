// import ProjectCard from "@/components/ProjectCard";
// import { CustomImages } from "@/constants";
// import { StaticImageData } from "next/image";

const Section2 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">about</h1>

      <section className="flex grid-cols-6 sm:grid-cols-3 gap-3">
        {/* {CustomImages.map((item: StaticImageData, index: number ) => (
          <ProjectCard src={item} key={index} />
        ))} */}
      </section>
    </div>
  );
};

export default Section2;
