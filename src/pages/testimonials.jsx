import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "In love with the accuracy and quality! Thanks for the amazing support.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum autem fuga itaque molestias sint, nulla nisi, dolor dolore dolores delectus maiores ullam eveniet maxime doloribus explicabo reprehenderit non harum.",
    author: "CK (Exporter)",
  },
  {
    text: "Truly impressed by the commitment to quality and service.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum autem fuga itaque molestias sint, nulla nisi, dolor dolore dolores delectus maiores ullam eveniet maxime doloribus explicabo reprehenderit non harum.",
    author: "AK (Retailer)",
  },
  {
    text: "Exceptional experience working with your team!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum autem fuga itaque molestias sint, nulla nisi, dolor dolore dolores delectus maiores ullam eveniet maxime doloribus explicabo reprehenderit non harum.",
    author: "PK (Buyer)",
  },
  {
    text: "Product quality is top-notch. We'll definitely order again.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum autem fuga itaque molestias sint, nulla nisi, dolor dolore dolores delectus maiores ullam eveniet maxime doloribus explicabo reprehenderit non harum.",
    author: "MK (Retail Buyer)",
  },
  {
    text: "Loved the transparency and timely updates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum autem fuga itaque molestias sint, nulla nisi, dolor dolore dolores delectus maiores ullam eveniet maxime doloribus explicabo reprehenderit non harum.",
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
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/testimonial.jpeg')" }}
    >
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 bg-white text-black rounded-full p-3 shadow-md hover:bg-black hover:text-white transition z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex relative w-full max-w-7xl h-80 justify-center items-center overflow-hidden">
      
        <div className="hidden lg:flex w-full justify-center items-center relative h-full">
          {[getIndex(1), getIndex(0), getIndex(-1)].map((i, idx) => {
            const item = testimonials[i];
            const positionClass =
              idx === 0
                ? "translate-x-[-120%] scale-90 opacity-80 blur-sm z-0"
                : idx === 1
                ? "translate-x-0 scale-110 opacity-100 z-10"
                : "translate-x-[120%] scale-90 opacity-80 blur-sm z-0";

            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ease-in-out w-[90%] sm:w-[40%] lg:w-[30%] h-72 p-6 rounded-xl backdrop-blur-md border border-white/10 text-white bg-black/60 ${positionClass}`}
              >
                <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-sm md:text-base mb-3 leading-relaxed ">{item.text}</p>
                <p className="text-sm font-semibold">- {item.author}</p>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden w-full flex justify-center items-center">
          <div className="w-full sm:w-[80%] md:w-[60%] h-72 p-6 rounded-xl backdrop-blur-md border border-white/10 text-white bg-black/60 transition-all duration-500 ease-in-out">
            <div className="flex justify-center gap-1 text-yellow-400 mb-3">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="text-sm md:text-base mb-3 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-sm font-semibold">- {testimonials[currentIndex].author}</p>
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