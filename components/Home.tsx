import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-green-100 to-white min-h-screen w-screen flex items-start justify-center text-center px-4 pt-12 pb-12 md:pt-10 ">
      <div className="max-w-4xl mt-12">
        <h2 className="text-green-500 text-2xl md:text-3xl mb-4 font-bold">
          WELCOME TO DATASAZ SOLUTIONS
        </h2>
        <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
          Automated Account Information Systems & Business Development Services
        </h1>
        <p className="text-gray-600 mb-8 text-lg md:text-xl">
          Empowering businesses with cutting-edge technology and financial
          expertise 
        </p>
        <button className="bg-green-500 font-bold text-white text-lg py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-green-600 transition duration-300">
          <Link href="#about">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;