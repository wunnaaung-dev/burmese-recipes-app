import Heading from "../typography/Heading";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav
      id="top"
      className="flex justify-between items-center bg-pink-600 py-5 px-4 font-open-sans "
    >
      <Link href="/" className="text-pink-50 text-xl md:text-3xl">Burmese Recipes App</Link>
      <Link href="/favorites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" size-8 text-yellow-400"
        >
          <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </nav>
  );
};

export default Navbar;
