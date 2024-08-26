import React from "react";
import Image from "next/image";

const CEOMessage: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-green-100 via-white to-green-100 min-h-screen flex items-center justify-center px-4 py-12 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-14">
          Message from CEO
        </h1>

        {/* <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto ">
            <Image
              src="/waqas.jpeg" // Replace with your CEO's image path
              alt="CEO Adeel Ahmed"
              width={200}
              height={200}
              className="cover rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg mx-auto"
            />
          </div>
        </div> */}

        <blockquote className="text-cyan-700 text-xl italic mb-8 px-4">
          <span className="text-5xl text-cyan-800">&apos;&apos;</span>
          At DataSAZ Solutions, Our goal is simple yet ambitious: to drive
          growth, enhance efficiency, and unlock the full potential of your
          business. Our team of experts brings together a unique blend of
          technological innovation and financial acumen. We're not just service
          providers; we're your partners in success. Whether you're a small
          startup or an established enterprise, we tailor our solutions to meet
          your specific needs and help you stay ahead in this fast-paced digital
          world. Your success is our success, and we are dedicated to exceeding
          your expectations at every turn.
          <span className="text-5xl text-cyan-800">&apos;&apos;</span>
        </blockquote>
        <p className="text-2xl font-semibold text-green-500 text-right mb-4">
          Adeel Ahmed
        </p>
        <p className="text-lg text-gray-900 text-right mb-4">CEO, DATASAZ SOLUTIONS</p>
      </div>
    </div>
  );
};

export default CEOMessage;
