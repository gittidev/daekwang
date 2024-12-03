import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/app/(home)/components";

type Section = {
  id: string;
  Component: React.ComponentType;
};

const sections: Section[] = [
  { id: "section1", Component: Section1 },
  { id: "section2", Component: Section2 },
  { id: "section3", Component: Section3 },
  { id: "section4", Component: Section4 },
];

export default function Home() {
  return (
    <main
      className="relative h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar snap-start"
      style={{ scrollBehavior: "smooth" }}
    >
      <ul>
        {sections.map(({ id, Component }) => (
          <li key={id} id={id}>
            <div className="snap-end">
              <Component />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
