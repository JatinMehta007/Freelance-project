import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `In love with the accuracy and quality! Thanks for the amazing support throughout the manufacturing process and on-time delivery, specifically with changing requirements.`,
    author: "CK (Exporter)",
  },
  {
    text: `Truly impressed by the commitment to quality and service. Reliable and precise.`,
    author: "AK (Retailer)",
  },
  {
    text: `Exceptional experience working with your team. Transparent communication and timely delivery!`,
    author: "PK (Buyer)",
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const getTestimonial = (offset) => {
    return testimonials[(currentIndex + offset + testimonials.length) % testimonials.length];
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/testimonial.jpeg')" }}
    >
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-8 bg-white text-black rounded-full p-3 shadow-lg hover:bg-black hover:text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-3 gap-20 px-10 w-full max-w-[1200px]">
        {[getTestimonial(-1), getTestimonial(0), getTestimonial(1)].map((item, i) => (
          <div
            key={i}
            className={`rounded-md p-10 bg-black/60 text-white text-center shadow-md backdrop-blur-md border border-white/10 ${
              i === 1 ? "scale-125 bg-black" : ""
            } transition-transform duration-300`}
          >
            <div className="flex justify-center gap-1 mb-4 text-yellow-400">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="text-sm md:text-base leading-relaxed mb-4">{item.text}</p>
            <p className="text-xs md:text-sm font-semibold">- {item.author}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-8 bg-white text-black rounded-full p-3 shadow-lg hover:bg-black hover:text-white transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};