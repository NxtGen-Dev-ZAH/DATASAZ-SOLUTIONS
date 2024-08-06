import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Adeel Ahmed ", role: "CEO & COO", image: "/adeel.jpeg" },
  {
    name: "Zaheer Ahmad ",
    role: "Lead Developer",
    image: "/imagemine.jpeg",
  },
];
export default function About() {
  return (
    <div className="bg-gradient-to-t from-green-50 via-white to-green-100 w-screen text-gray-800 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6">
          About <span className="text-green-500 ml-2 ">DataSAZ Solutions</span>
        </h1>
        <section className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            At DataSAZ Solutions, we are dedicated to empowering businesses with
            cutting-edge technology and financial expertise. Our mission is to
            provide automated account information systems and premium business
            development services that drive growth and efficiency.
          </p>
        </section>
        <section className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 text-base md:text-lg">
            DataSAZ Solutions is an assemblage of information technology and
            financial education. We bring together a team of experts in
            automated account information systems and business development. Our
            professionals ensure that we stay at the forefront of technological
            advancements in financial management and business growth strategies.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-green-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
