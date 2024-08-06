"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`
        sticky top-0 left-0 right-0 z-50 w-screen
       h-[80px] flex justify-between items-center
        bg-gradient-to-r from-white via-green-100 to-white px-8 border-b-2
        transition-all duration-300 ease-in-out
        ${scrolled ? "bg-opacity-100" : "bg-opacity-100"}
      `}
    >
      <a href="#">
        <div className="flex items-center ml-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={40}
            className="w-auto h-auto object-contain rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-black text-4xl font-light ml-4 tracking-[0.1em]">
              Data
              <span className="text-green-500 font-black">SAZ</span>
            </h1>
            <h1 className="text-cyan-600 text-2xl ml-20 font-light">
              Solutions
            </h1>
          </div>
        </div>
      </a>
      <div className="hidden md:flex justify-center items-center w-full">
        <Navigation />
      </div>
      <div className="ml-auto hidden lg:block">
        <a href="https://www.linkedin.com/company/datasaz-solutions/">
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full flex items-center space-x-2">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.042-1.857-3.042-1.858 0-2.143 1.45-2.143 2.95v5.661H9.34V9h3.413v1.561h.049c.474-.899 1.631-1.847 3.36-1.847 3.594 0 4.257 2.365 4.257 5.446v6.291zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.07 0-1.144.924-2.07 2.068-2.07 1.145 0 2.069.926 2.069 2.07 0 1.144-.924 2.07-2.069 2.07zm1.775 13.019H3.56V9h3.552v11.452zM22.225 0H1.771C.791 0 0 .774 0 1.727v20.546C0 23.226.791 24 1.771 24h20.451C23.21 24 24 23.226 24 22.273V1.727C24 .774 23.21 0 22.225 0z" />
            </svg>
            <span>LinkedIn</span>
          </button>
        </a>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-white md:hidden">
          <Navigation />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
