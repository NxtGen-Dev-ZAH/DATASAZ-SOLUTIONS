"use client";
import React, { useState } from "react";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "/react.png" },
  { name: "Next.js", icon: "/next.png" },
  { name: "Docker", icon: "/vue.png" },
  { name: "TensorFlow", icon: "/tensorflow.png" },
  { name: "PyTorch", icon: "/pytorch.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "Fastapi", icon: "/django.png" },
  { name: "AWS", icon: "/aws.png" },
  { name: "Azure", icon: "/azure.png" },
  { name: "Google Cloud", icon: "/gcp.png" },
];

const products = [
  { name: "Product 1", price: "$100", image: "/product1.png" },
  { name: "Product 2", price: "$200", image: "/product2.png" },
  { name: "Product 3", price: "$300", image: "/product3.png" },
  // Add more products as needed
  { name: "Product 1", price: "$100", image: "/product1.png" },
  { name: "Product 2", price: "$200", image: "/product2.png" },
  { name: "Product 3", price: "$300", image: "/product3.png" },
];

export default function Technologies() {
  const [view, setView] = useState("technologies");

  return (
    <div className="bg-gradient-to-tl from-green-100 via-white to-green-100 text-gray-800 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-green-500 mb-12 text-center">
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

          <div className=" grid grid-cols-4 gap-8 place-items-center">
            {view === "technologies" &&
              technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="mt-2 text-base font-bold">{tech.name}</span>
                </div>
              ))}
          </div>
          <div className=" grid grid-cols-3 gap-8 place-items-center">
            {view === "products" &&
              products.map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="mt-2 text-base font-bold">
                    {product.name}
                  </span>
                  <span className="mt-1 text-base font-normal">
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
