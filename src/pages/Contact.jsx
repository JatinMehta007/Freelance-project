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
    toast.success("Your message has been submitted!");
    console.log("Submitted Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      className="relative w-screen h-screen grid grid-cols-1 md:grid-cols-2 text-white overflow-hidden"
      id="contact"
      style={{
        backgroundImage: "url('/testimonial.jpeg')", // ✅ Make sure this path is correct in your /public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: '"Times New Roman", Times, serif' 
      }}
    >
      <Toaster />

      {/* Black overlay for readability */}
      <div className="absolute  bg-black/60 z-0" />

      {/* Left Side: Contact Info */}
      <div className="z-10 pl-24 flex flex-col justify-center bg-[#5c5252]/60 ">
        <h2 className="text-2xl tracking-widest uppercase mb-2 text-[#FFF7EF]">Get in touch</h2>
        <h1 className="text-6xl font-bold text-[#F3D64C] mb-1">Convey Your</h1>
        <h1 className="text-6xl font-bold text-[#EFEEFF] mb-4">Ideas to Us</h1>
        <p className="text-2xl text-[#FFF7EF] leading-relaxed mb-6 w-[80%]">
          Contact us for gemstones inquiry and collaboration opportunities by submitting the form or reach out directly!
        </p>
        <div className="space-y-4 text-xl text-[#FFF7EF] ">
          <div className="flex items-center gap-3">
            <span className="bg-yellow-400 rounded-full p-2">📞</span>
            <span>9929977744, 7426813744</span>
          </div>
          <div className="flex items-center gap-3 text-[#FFF7EF] ">
            <span className="bg-yellow-400 rounded-full p-2">📧</span>
            <span>hello@reallygreatsite.com</span>
          </div>
          <div className="flex items-center gap-3 text-[#FFF7EF] ">
            <span className="bg-yellow-400 rounded-full p-2">📍</span>
            <span>37/3 Muktanand nagar, Gopalpura, Jaipur</span>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="z-10 p-10 flex flex-col justify-center ">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-white text-black border border-gray-300 p-3 rounded-md focus:outline-none"
            required
          />
          <div className="flex gap-4">
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