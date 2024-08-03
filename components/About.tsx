import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Saeed Ahmad", role: "CEO", image: "/team-member-1.jpg" },
  { name: "Adeel Ahmed ", role: "C0O", image: "/team-member-2.jpg" },
  {
    name: "Zaheer Ahmad ",
    role: "Lead Developer",
    image: "/team-member-3.jpg",
  },
];

export default function About() {
  return (
    <div className="bg-gradient-to-t from-green-50 via-white to-green-100 text-gray-800 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-500 mb-8">
          About <span className="text-green-500 ml-2 ">DataSAZ Solutions</span>
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At DataSAZ Solutions, we are dedicated to empowering businesses with
            cutting-edge technology and financial expertise. Our mission is to
            provide automated account information systems and premium business
            development services that drive growth and efficiency.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600">
            DataSAZ Solutions is an assemblage of information technology and
            financial education. We bring together a team of experts in
            automated account information systems and business development. Our
            professionals ensure that we stay at the forefront of technological
            advancements in financial management and business growth strategies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-green-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
