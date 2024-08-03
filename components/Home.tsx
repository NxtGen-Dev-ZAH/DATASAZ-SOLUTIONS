import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-green-100 to-white min-h-screen w-screen   flex items-center justify-center text-center px-4">
      <div>
        <h2 className="text-green-500 text-3xl mb-4 font-bold">
          WELCOME TO DATASAZ SOLUTIONS
        </h2>
        <h1 className="text-gray-800 text-4xl md:text-6xl font-bold mb-6">
          Automated Account Information Systems & Business Development Services
        </h1>
        <p className="text-gray-600 mb-8 text-xl">
          Empowering businesses with cutting-edge technology and financial
          expertise
        </p>
        <button className="bg-green-500 font-bold text-white text-lg py-4 px-8 rounded-full hover:bg-green-600 transition duration-300">
          <Link href="#about us">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
