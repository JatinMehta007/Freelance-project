import { useState, useEffect } from "react";

export const Button = () => {
  const slides = [
    "/lapis.jpg",
    "/oyster.jpeg",
    "/tigers.jpg",
    "/rhodonite.jpg",
    "/swissbt.jpg",
    "/back2.jpg",
    "/back1.png",
    "/back.jpeg",
  ];

  const groupSize = 2; // show 2 images per indicator group (4 indicators total)
  const visibleCount = 4; // number of images shown at once
  const totalGroups = Math.ceil(slides.length / groupSize); // 8 / 2 = 4
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlideGroup = () => {
    const nextIndex = (currentIndex + groupSize) % slides.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideGroup();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleSlides.push(slides[(currentIndex + i) % slides.length]);
    }
    return visibleSlides;
  };

  const visibleSlides = getVisibleSlides();
  const activeGroup = Math.floor(currentIndex / groupSize);

  return (
    <div className="hidden md:block bg-neutral-300">
      {/* Image Grid */}
      <div className="grid grid-cols-4 m-11 gap-10">
        {visibleSlides.map((img, index) => (
          <div
            key={index}
            className="w-full h-[270px] rounded-xl bg-center bg-cover duration-500"
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center items-center space-x-4 pb-10">
        {[...Array(totalGroups)].map((_, i) => (
          <div
            key={i}
            className={`h-[5px] w-10 rounded-full transition-all duration-300 ${
              i === activeGroup ? "bg-yellow-600" : "bg-black"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};