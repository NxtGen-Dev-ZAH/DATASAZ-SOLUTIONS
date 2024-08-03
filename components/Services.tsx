"use client";

import React, { useState } from "react";

const services = [
  {
    name: "Automated Account Systems",
    description:
      "Our Automated Account Information Systems are tailored to help businesses manage their financial data effortlessly. We provide real-time financial tracking, advanced security features, customizable reporting, and seamless integration with existing software.",
    link: "link.datasaz/automated-systems",
  },
  {
    name: "Business Development Services",
    description:
      "We offer premium business development services to propel your business to new heights. Our comprehensive suite includes strategic planning, market analysis, and growth strategies tailored to your specific needs.",
  },
  {
    name: "Office Equipment",
    description:
      "High-quality office equipment to streamline your operations. We offer a range of printers, toners, and cartridges to meet your business needs and improve productivity.",
  },
  {
    name: "Maintenance Services",
    description:
      "Regular maintenance and intervention services to keep your office equipment running smoothly. Our expert technicians ensure minimal downtime and maximum efficiency.",
  },
  {
    name: "Financial Education",
    description:
      "Educational resources and training programs to enhance your team's financial literacy and decision-making skills, empowering your business with valuable financial knowledge.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-gradient-to-t from-green-100 via-white to-green-100 min-h-screen text-gray-800  p-8">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-green-500 text-xl mb-2 font-bold tracking-[0.1em] ">
          OUR SERVICES
        </h2>
        <h1 className="text-4xl font-bold mb-8">What We Offer</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 ">
        {services.map((service) => (
          <button
            key={service.name}
            className={`p-4 border-2 rounded relative font-bold py-10  ${
              selectedService.name === service.name
                ? "border-green-500 text-green-500 shadow-glow"
                : "border-gray-300 text-gray-600 hover:border-green-500"
            } transition-colors hover:text-green-500`}
            onClick={() => setSelectedService(service)}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-4">{selectedService.name}</h3>
        <p className="text-gray-600 mb-4 text-lg">
          {selectedService.description}
        </p>
        {selectedService.link && (
          <a href="#" className="text-green-500 text-lg hover:underline">
            Learn More &gt;
          </a>
        )}
      </div>
    </div>
  );
};

export default Services;
