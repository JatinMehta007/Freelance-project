import { useState, useEffect } from "react";

export const Button = () => {
  const slides = [
   "/lapis.jpg",
    "/oyster.jpeg",
    "/tigers.jpg",
    "/rhodonite.jpg",
    "/swissbt.jpg",
    "/back1.png",
    "/back.jpeg",
    "/blackonyxs.jpg",
    "../src/assets/peridot1.jpg",
    "../src/assets/amethyst.jpg",
    "../src/assets/citrine.jpg",
    "/slide.jpeg",
  ];

  const visibleCount = 4;
  const totalIndicators = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      return slides[(currentIndex + i) % slides.length];
    });
  };

  const visibleSlides = getVisibleSlides();
  const activeIndicator = currentIndex % totalIndicators;

  return (
    <div className="hidden md:block bg-neutral-700">
      {/* Image Grid */}
      <div className="grid grid-cols-4 m-11 gap-10">
        {visibleSlides.map((img, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className="w-full h-[270px] rounded-xl bg-center bg-cover transition-opacity duration-700 ease-in-out opacity-100"
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Circular Slide Indicators */}
      <div className="flex justify-center items-center space-x-4 mb-10">
        {[...Array(totalIndicators)].map((_, i) => (
          <div
            key={i}
            className={`h-[4px] w-10 rounded-full transition-all duration-300 ${
              i === activeIndicator ? "bg-yellow-400" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};