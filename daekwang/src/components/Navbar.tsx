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
        <ul className="flex gap-6 items-center font-semibold">
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
  "h-16 w-full p-4 flex border-1 border-gray-300 border-solid bg-white/30 backdrop-blur-lg rounded-b-lg shadow-md grid-3 items-center fixed top-0 left-0 z-50";
