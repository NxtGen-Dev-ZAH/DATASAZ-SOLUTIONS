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

const socialIcons = [
  {
    name: "Instagram",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
];
export default function About() {
  return (
    <div className="bg-gradient-to-t from-green-50 via-white to-green-100 w-screen text-gray-800 min-h-screen p-4 pt-0 md:pt-12 ">
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
          <h2 className="text-xl md:text-2xl font-semibold mb-6 tracking-wider text-center md:text-left">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-12">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </section>
        {/* <section>
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
        </section> */}
      </div>
    </div>
  );
}
