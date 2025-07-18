import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service", 
      "template", 
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "api" 
    )
    .then(
      (result) => {
        toast.success("Your message has been sent!");
        console.log("Success:", result.text);

        // Clear the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        toast.error("Something went wrong. Try again!");
        console.error("Error:", error);
      }
    );
};
  return (
    <div
      className="relative w-screen xl:min-h-screen flex flex-col md:grid md:grid-cols-2 text-white overflow-hidden"
      id="contact"
      style={{
        backgroundImage: "url('/testimonial.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: '"Times New Roman", Times, serif',
      }}
    >
      <Toaster />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Left Side */}
      <div className="z-10 px-6 py-12 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center bg-[#5c5252]/60">
        <h2 className="text-lg sm:text-xl tracking-widest uppercase mb-2 text-[#FFF7EF]">
          Get in touch
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F3D64C] mb-1">
          Convey Your
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#EFEEFF] mb-4">
          Ideas to Us
        </h1>
        <p className="text-lg sm:text-xl text-[#FFF7EF] leading-relaxed mb-6 w-full md:w-[80%]">
          Contact us for gemstones inquiry and collaboration opportunities by
          submitting the form or reach out directly!
        </p>
        <div className="space-y-4 text-base sm:text-lg text-[#FFF7EF]">
          <div className="flex items-center gap-3">
            <span className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full text-xl">
              📞
            </span>
            <span className="hover:cursor-pointer flex flex-row">
              <a
                href="https://wa.me/919929xxxxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                992xxxxxx
              </a>
              <a
                href="https://wa.me/91742xxxxx"
                target="_blank"
                rel="noopener noreferrer"
              >
               , 74268xxxxxx
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full text-xl">
              📧
            </span>
            <span className="hover:cursor-pointer">
              <a href="mailto:Info12@gnail.com">
                Info12@gnail.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-yellow-400 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                📍
              </span>
            </a>
            <span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                 Muktanand nagar, Gopalpura, Jaipur
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="z-10 px-6 py-12 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-white text-black border border-gray-300 p-3 rounded-md focus:outline-none"
            required
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-white text-black border border-gray-300 p-3 rounded-md focus:outline-none"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full bg-white text-black border border-gray-300 p-3 rounded-md focus:outline-none"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="w-full bg-white text-black border border-gray-300 p-3 rounded-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#F3D64C] text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors w-full"
          >
            Submit Now
          </button>
        </form>
        
      </div>

    </div>
  );
};
