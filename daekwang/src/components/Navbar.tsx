import { routes } from "@/constants";
import WhiteLogo from "public/whiteLogo.svg";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className={navContainer}>
        <WhiteLogo className="flex-shrink-0 w-10 h-10" />
        <div className="flex-grow"></div>
        <ul className="flex gap-6 items-center">
          {routes.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
      </div>
    </>
  );
};

export default Navbar;

// styles
const navContainer =
  "min-w-vw p-4 flex border-1 border-gray-300 border-solid bg-white/30 backdrop-blur-lg rounded-b-lg shadow-md grid-3 items-center";
