import { useState } from "react";

export const Gallery = () => {
  const slides = [
    {
      src: "/blackonyxs.jpg",
      name: "Onyx",
      origin: "India",
      Interesting_Facts:
        "Believed to absorb negative energy and promote emotional strength.",
      Popular_Uses:
        "Popular in men's jewelry and grounding spiritual items.",
      Stock_Information: "Available in Black, Green, Red, Orange",
    },
    {
      src: "/image1.png",
      name: "Onyx",
      origin: "India",
      Interesting_Facts:
        "Believed to absorb negative energy and promote emotional strength.",
      Popular_Uses:
        "Popular in men's jewelry and grounding spiritual items.",
      Stock_Information: "Available in Black, Green, Red, Orange",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="bg-black min-h-screen w-screen flex flex-col items-center justify-center text-[#B8B7C1]"
    >
      <p className="text-8xl text-center p-10">Gallery</p>
      <div className="border border-[#B8B7C1] w-[70%] mx-auto"></div>
      <p className="font-normal p-10 text-2xl text-center">
        We design People Inspired Experiences that create <br />
        <span>positive change in people's lives</span>
      </p>

      {/* Slide Container */}
      <div className="relative w-[300px] h-[350px] overflow-hidden bg-white shadow-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 300}px)`,
            width: `${slides.length * 300}px`,
          }}
        >
          {slides.map((item, i) => (
            <div
              key={i}
              className="w-[300px] h-[350px] shrink-0 flex flex-col items-center"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-[85%] h-[180px] object-contain pt-4"
              />

              {/* Centered Text Block */}
              <div className="h-[150px] w-full mt-2.5 flex flex-col justify-center items-center text-center px-4 text-black text-sm">
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                {i === 0 && (
                  <>
                    <p className="text-sm">
                      <span className="font-semibold">Origin:</span> {item.origin}
                    </p>
                    <p className="text-sm mt-2">
                      <span className="font-semibold">Stock Info:</span> {item.Stock_Information}
                    </p>
                  </>
                )}
                {i === 1 && (
                  <>
                    <p className="text-sm text-left">
                      <span className="font-semibold">Popular Use:</span> {item.Popular_Uses}
                    </p>
                    <p className="text-sm mt-2 text-left">
                      <span className="font-semibold">Interesting Fact:</span> {item.Interesting_Facts}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 cursor-pointer transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 transition duration-300 z-10"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 cursor-pointer transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 transition duration-300 z-10"
        >
          {">"}
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};