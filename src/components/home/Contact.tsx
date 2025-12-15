"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-black flex flex-col gap-4 sm:gap-6 lg:gap-6 items-center lg:items-start px-4 sm:px-8 lg:px-32 py-8 sm:py-12 lg:py-16 w-full">
      <div className="flex items-center lg:items-start justify-between w-full">
        <div className="flex items-center lg:items-start w-full lg:w-2xl">
          <div className="flex flex-col items-center lg:items-start w-full">
            <h2 className="font-poppins font-normal leading-normal text-2xl sm:text-3xl lg:text-4xl text-white w-full text-center lg:text-left">
              Get in Touch
            </h2>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-start w-full"
      >
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-start w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 items-start w-full">
            <div className="relative w-full sm:w-auto shrink-0">
              <label
                htmlFor="name"
                className="font-inter font-medium leading-normal text-sm text-white tracking-wide block mb-4 text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rachel Joe"
                className="bg-[#1b1b1b] border-[#cbcbcb] border border-solid w-full px-5 lg:px-5 py-3 lg:py-3 rounded font-inter font-light text-sm sm:text-sm text-[#c4c4c4] leading-normal tracking-tight placeholder:text-[#555] focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="relative w-full sm:w-auto shrink-0">
              <label
                htmlFor="email"
                className="font-inter font-medium leading-normal text-sm text-white tracking-wide block mb-4 text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Rachel@domain.com"
                className="bg-[#1b1b1b] border-[#cbcbcb] border border-solid w-full px-5 lg:px-5 py-3 lg:py-3 rounded font-inter font-light text-sm sm:text-sm text-[#c4c4c4] leading-normal tracking-tight placeholder:text-[#555] focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="relative w-full sm:w-auto shrink-0 sm:col-span-1 lg:col-span-1">
              <label
                htmlFor="phone"
                className="font-inter font-medium leading-normal text-sm text-white tracking-wide block mb-4 text-left"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971...."
                className="bg-[#1b1b1b] border-[#cbcbcb] border border-solid w-full px-5 lg:px-5 py-3 lg:py-3 rounded font-inter font-light text-sm sm:text-sm text-[#c4c4c4] leading-normal tracking-tight placeholder:text-[#555] focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-12 items-start w-full">
            <div className="relative w-full sm:w-[344px] lg:w-[344px] shrink-0">
              <label
                htmlFor="subject"
                className="font-inter font-medium leading-normal text-sm text-white tracking-wide block mb-4 text-left"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-[#1b1b1b] border-[#cbcbcb] border border-solid w-full px-5 lg:px-5 py-3 lg:py-3 rounded font-inter font-light text-sm sm:text-sm text-[#c4c4c4] leading-normal tracking-tight placeholder:text-[#555] focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="relative flex-1 w-full sm:flex-1 lg:w-[736px] shrink-0">
              <label
                htmlFor="message"
                className="font-inter font-medium leading-normal text-sm text-white tracking-wide block mb-4 text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Query"
                rows={2}
                className="bg-[#1b1b1b] border-[#cbcbcb] border border-solid w-full px-5 lg:px-5 py-3 lg:py-3 rounded font-inter font-light text-sm sm:text-sm text-[#c4c4c4] leading-normal tracking-tight placeholder:text-[#555] focus:outline-none focus:border-white transition-colors resize-none min-h-12"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#003e25] flex items-center justify-center px-4 lg:px-5 py-2.5 lg:py-3 rounded-3xl w-full sm:w-fit hover:opacity-90 transition-opacity"
        >
          <p className="font-inter font-normal leading-normal text-sm lg:text-base text-white tracking-wide whitespace-nowrap">
            Send my message
          </p>
        </button>
      </form>
    </section>
  );
}

