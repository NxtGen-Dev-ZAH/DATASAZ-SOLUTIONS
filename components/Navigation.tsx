import React, { useEffect, useState } from "react";

export const NavLinks = [
  {
    name: "Home",
    link: "#home",
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
    link: "#about",
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentLink = "";
      NavLinks.forEach((nav) => {
        const section = document.querySelector(nav.link);
        if (
          section &&
          section.getBoundingClientRect().top <= 60 &&
          section.getBoundingClientRect().bottom > 300
        ) {
          currentLink = nav.link;
        }
      });
      setActiveLink(currentLink);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-center items-center w-full md:w-auto py-5 md:py-0  ">
      {NavLinks.map((nav) => (
        <a
          key={nav.name}
          onClick={() => handleClick(nav.link)}
          className={`
          mx-4 font-semibold  py-1 border-b-2
          transition-all duration-300 ease-in-out
          transform hover:scale-110 hover:text-green-300
          active:scale-95 active:text-green-500 
          ${
            activeLink === nav.link
              ? "border-green-800 text-green-800"
              : "border-transparent hover:border-green-300 text-green-500"
          }
          mb-4 md:mb-0 cursor-pointer
        `}
        >
          {nav.name}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
