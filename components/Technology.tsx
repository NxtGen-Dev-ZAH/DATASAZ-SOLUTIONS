"use client";

import React, { useState } from "react";
import Image from "next/image";

const technologies = [
  { name: "Cloud Computing", icon: "/cloud.jpg" },
  { name: "AI Integration", icon: "/ai.png" },
  { name: "Backend Development", icon: "/backend.png" },
  { name: "Frontend Development", icon: "/frontend.png" },
  { name: "DevOps", icon: "/devops.png" },
  { name: "Cybersecurity", icon: "/cybersecurity.png" },
  { name: "Data Analytics", icon: "/data analysis.png" },
  { name: "Mobile Development", icon: "/mobile.jpeg" },
];

const products = [
  { name: "Printers", price: "from 88,900 pkr", image: "/printers.jpeg" },
  {
    name: "Small scale services",
    price: "from 10,000 pkr",
    image: "/services.png",
  },
  {
    name: "Tonner & Cartridges",
    price: "from 10,00 pkr",
    image: "/tonner.png",
  },
  // Add more products as needed
  {
    name: "Maintenance Interventions",
    price: "from 10,000 pkr",
    image: "/maintaince.png",
  },
  { name: "Laptop", price: "from 50,000 pkr", image: "/laptop.jpg" },
  { name: "Computer Parts", price: "from 10,000 pkr", image: "/parts.jpg" },
];

export default function Technologies() {
  const [view, setView] = useState("technologies");

  return (
    <div className="bg-gradient-to-tl from-green-100 via-white to-green-100 text-gray-800 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 w-screen">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-500 mb-8 md:mb-12 text-center">
          {view === "technologies"
            ? "Technologies We Leverage"
            : "Our Products"}
        </h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`py-2 px-4 rounded-full font-semibold ${
              view === "technologies"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setView("technologies")}
          >
            Technologies
          </button>
          <button
            className={`py-2 px-4 rounded-full font-semibold ${
              view === "products"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setView("products")}
          >
            Products
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-10 transform skew-y-6"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 place-items-center">
            {view === "technologies" &&
              technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="rounded-full object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm md:text-base font-bold text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 place-items-center">
            {view === "products" &&
              products.map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="rounded-full object-contain"
                    />
                  </div>
                  <span className="mt-2 text-base md:text-lg font-extrabold text-center">
                    {product.name}
                  </span>
                  <span className="mt-1 text-sm md:text-base font-normal">
                    {product.price}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
