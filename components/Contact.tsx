"use client"
import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(5, "Please enter your name (at least 5 characters)"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().trim().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("Sending...");

    try {
      schema.parse(formData);
      setErrors({});

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus("Message sent successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        setSubmitStatus(null);
      } else {
        console.error("Error submitting form:", error);
        setSubmitStatus("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gradient-to-t from-green-100 via-white to-green-100 text-gray-800  w-screen min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl bg-transparent rounded-lg shadow-xl p-6 md:p-8 border border-gray-400 border-opacity-50">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-6">
              CONTACT US
            </h1>
            <p className="mb-4 text-gray-600 text-sm md:text-base">
              At DataSAZ Solutions, we are dedicated to providing automated
              account information systems and business development services. Our
              team of experts is ready to assist you with cutting-edge
              technology and financial expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm md:text-base">
                  +92 (0) 336 786 00 90
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm md:text-base">
                  datasaz.contact@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-11 h-8 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm md:text-base">
                  H-1, Main Mujahid Town, Sangjani near Sangjani Toll Plaza
                  GT-Road Islamabad, 44000 Pakistan
                </span>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-transparent rounded border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent rounded border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                placeholder="Enter your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-transparent rounded border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                placeholder="Enter your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 px-4 rounded transition duration-300"
            >
              Send Message
            </button>
            {submitStatus && (
              <p
                className={`text-center ${
                  submitStatus.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
