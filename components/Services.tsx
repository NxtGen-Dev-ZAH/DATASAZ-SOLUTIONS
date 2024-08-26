"use client";

import React, { useState } from "react";

const services = [
  {
    name: "Financial Automation",
    description:
      "Revolutionize your financial operations with our cutting-edge Financial Automation solutions. Streamline your accounting processes, reduce errors, and gain real-time insights into your financial health. Our automated systems handle tasks like invoice processing, expense management, and bank reconciliation efficiently, freeing up your time to focus on strategic decision-making. Benefit from increased accuracy, improved efficiency, and enhanced financial visibility.",
    link: "link.datasaz/automated-systems",
  },
  {
    name: "Growth Strategy Consulting",
    description:
      "Accelerate your business growth with our expert Growth Strategy Consulting services. We dive deep into your business, identify untapped opportunities, and develop tailored strategies to drive sustainable growth. Our consultants leverage industry best practices and data-driven insights to create actionable plans that deliver tangible results. From market expansion to product innovation, we partner with you to achieve your business goals.",
  },
  {
    name: "Payroll Management",
    description:
      "Simplify your payroll administration with our comprehensive Payroll Management services. We handle all aspects of payroll processing, including calculations, tax filings, and direct deposits, ensuring accuracy and compliance. Our user-friendly platform provides real-time access to employee data and payroll information, enabling you to manage your workforce efficiently. Experience peace of mind knowing your payroll is in expert hands.",
  },
  {
    name: "Financial Bookkeeping",
    description:
      "Maintain meticulous financial records with our Financial Bookkeeping services. Our skilled bookkeepers accurately record your financial transactions, reconcile accounts, and provide clear financial reports. We use advanced accounting software to streamline processes and enhance data accuracy. By outsourcing your bookkeeping, you gain valuable time to focus on core business activities while ensuring your financial information is always up-to-date and reliable.",
  },
  {
    name: "Financial Reporting",
    description:
      "Gain actionable insights into your financial performance with our Financial Reporting services. We create comprehensive and informative financial statements, including balance sheets, income statements, and cash flow statements. Our reports are tailored to your specific needs and provide clear visualizations of your financial health. Utilize these reports to make informed decisions, identify trends, and optimize your business operations.",
  },
  {
    name: "Tax Compliance and Planning",
    description:
      "Navigate the complex tax landscape with confidence through our Tax Compliance and Planning services. Our tax experts ensure you meet all tax obligations, optimize tax deductions, and minimize your tax liability. We stay up-to-date with the latest tax laws and regulations to protect your business from potential penalties. Let us handle your tax matters while you focus on growing your business.",
  },
  {
    name: "Digital Transformation Consulting",
    description:
      "Embark on a successful digital transformation journey with our Digital Transformation Consulting services. We assess your business needs, develop a tailored digital strategy, and guide you through the implementation process. Our experts leverage cutting-edge technologies to optimize your operations, enhance customer experiences, and drive innovation. Stay ahead of the competition with our strategic guidance and support.",
  },
  {
    name: "Custom Software Development",
    description:
      "Transform your business with our Custom Software Development services. We create tailored software solutions that address your unique challenges and drive efficiency. Our skilled developers collaborate closely with you to understand your requirements and deliver high-quality software that aligns with your business objectives. From concept to deployment, we provide end-to-end software development services, including design, development, testing, and ongoing support.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-gradient-to-t from-green-100 via-white to-green-100 min-h-screen w-screen text-gray-800 p-4 md:p-8 ">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-green-500 text-xl mb-2 font-bold tracking-[0.1em]">
          OUR SERVICES
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          What We Offer
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.name}
            className={`p-4 border-2 rounded relative font-bold py-6 md:py-10 ${
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
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {selectedService.name}
        </h3>
        <p className="text-gray-600 mb-4 text-base md:text-lg">
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
