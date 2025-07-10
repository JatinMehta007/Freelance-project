import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "In love with the accuracy and quality! Thanks for the amazing support.  ",
    author: "CK (Exporter)",
  },
  {
    text: "Truly impressed by the commitment to quality and service. ",
    author: "AK (Retailer)",
  },
  {
    text: "Exceptional experience working with your team. ",
    author: "PK (Buyer)",
  },
  {
    text: "Product quality is top-notch. We'll definitely order again. ",
    author: "MK (Retail Buyer)",
  },
  {
    text: "Loved the transparency and timely updates.",
    author: "TK (Wholesaler)",
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getIndex = (offset) =>
    (currentIndex + offset + testimonials.length) % testimonials.length;

  return (
  <div
    className="relative w-full lg:min-h-screen flex items-center justify-center bg-cover bg-center px-4"
    style={{
      background: 'radial-gradient(circle, #645558 0%, #3a3030 50%, #35383b 100%)',
    }}
  >
    {/* Left Arrow */}
    <button
      onClick={prev}
      className="absolute left-4 md:left-8 bg-white text-black rounded-full p-3 shadow-md hover:bg-black hover:text-white transition z-10"
    >
      <ChevronLeft size={24} />
    </button>

    {/* Container */}
    <div className="flex relative w-full max-w-7xl min-h-[500px] justify-center items-center overflow-hidden">
      {/* --- Desktop View --- */}
      <div className="hidden lg:flex w-full justify-center items-center relative h-full">
        {[getIndex(1), getIndex(0), getIndex(-1)].map((i, idx) => {
          const item = testimonials[i];
          const positionClass =
            idx === 0
              ? "translate-x-[-120%] scale-90 opacity-60 z-0"
              : idx === 1
              ? "translate-x-0 scale-110 opacity-100 z-10"
              : "translate-x-[120%] scale-90 opacity-60 z-0";

          return (
            <div
              key={i}
              className={`absolute transition-all duration-700 ease-in-out w-[90%] sm:w-[40%] lg:w-[27%] h-[450px] backdrop-blur-md text-white bg-black ${positionClass}`}
            >
              <div className="bg-[#DCD3CB] h-18 flex justify-center items-center">
                <div className="flex justify-center text-2xl gap-1 text-[#AF9D81]">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
              <div className="p-6 top-1/12 relative">
                <p
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  className="text-sm md:text-lg text-center mb-6"
                >
                  {item.text}
                </p>
                <p
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  className="text-2xl font-semibold text-center font-playfair"
                >
                  - {item.author}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Mobile / Tablet View --- */}
      <div className="lg:hidden w-full flex justify-center">
        <div className="w-[88%] sm:w-[80%] h-[400px] text-white bg-black backdrop-blur-md rounded-md ">
          <div className="bg-[#DCD3CB] h-16 py-3 mb-4 flex justify-center items-center">
            <div className="flex justify-center  text-xl sm:text-2xl gap-1 text-[#AF9D81]">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
          <p
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="text-base text-center mb-4 p-6"
          >
            {testimonials[currentIndex].text}
          </p>
          <p
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="text-xl font-semibold text-center font-playfair"
          >
            - {testimonials[currentIndex].author}
          </p>
        </div>
      </div>
    </div>

    {/* Right Arrow */}
    <button
      onClick={next}
      className="absolute right-4 md:right-8 bg-white text-black rounded-full p-3 shadow-md hover:bg-black hover:text-white transition z-10"
    >
      <ChevronRight size={24} />
    </button>
  </div>
);
};