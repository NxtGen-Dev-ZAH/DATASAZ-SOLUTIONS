import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export const NavLinks = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Services",

    link: "#services",
  },
  {
    name: "Technology",
    link: "#technology",
  },
  {
    name: "About Us",
    link: "#about-us",
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];
const Navigation: React.FC = () => {
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("/home");
  const path = usePathname();

  useEffect(() => {
    if (path) {
      setActiveLink(path);
    }
  }, [path]);

  useEffect(() => {
    if (activeLink !== path) {
      setIsRouting(true);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [activeLink, path]);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-auto py-5 md:py-0">
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          onClick={() => handleClick(nav.link)}
          className={`
            text-green-500 mx-4 font-semibold pb-1 border-b-4 
            transition-all duration-300 ease-in-out
            transform hover:scale-110 hover:text-green-500
            active:scale-95 active:text-green-500 tracking-[0.05em]
            ${
              activeLink === nav.link
                ? "border-green-500"
                : "border-transparent hover:border-green-500"
            }
          `}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
