import { useState } from "react";

const generateDummySlides = (count) => {
  const templateSlides = [
    {
      src: "/blackonyxs.jpg",
      name: "Onyx",
        origin: "India",
        Interesting_Facts:
          "Believed to absorb negative energy and promote emotional strength.",
        Popular_Uses: "Popular in men's jewelry and grounding spiritual items.",
        Stock_Information: "Available in Black, Green, Red, Orange",
    },
    {
      src: "/image1.png",
      name: "Onyx",
        origin: "India",
        Interesting_Facts:
          "Believed to absorb negative energy and promote emotional strength.",
        Popular_Uses: "Popular in men's jewelry and grounding spiritual items.",
        Stock_Information: "Available in Black, Green, Red, Orange",
    },
  ];

  // Repeat the slide template N times
  return Array.from({ length: count }, () => [...templateSlides]);
};

export const Gallery = () => {
  const allSlides = generateDummySlides(80); // 80 containers, each with 2 slides
  const [indexes, setIndexes] = useState(Array(80).fill(0)); // 80 individual indices

  const nextSlide = (i) => {
    setIndexes((prev) => {
      const updated = [...prev];
      updated[i] = (updated[i] + 1) % allSlides[i].length;
      return updated;
    });
  };

  const prevSlide = (i) => {
    setIndexes((prev) => {
      const updated = [...prev];
      updated[i] = (updated[i] - 1 + allSlides[i].length) % allSlides[i].length;
      return updated;
    });
  };

  return (
    <div
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="bg-black min-h-screen w-screen flex flex-col items-center text-[#B8B7C1] px-4"
    >
      <p className="text-8xl text-center py-10">Gallery</p>
      <div className="border border-[#B8B7C1] w-[70%] mb-10"></div>

      {/* Grid layout for 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {allSlides.map((slides, i) => {
          const current = indexes[i];
          const item = slides[current];

          return (
            <div
              key={i}
              className="relative w-[320px] h-[400px] bg-white shadow-lg shadow-neutral-400 overflow-hidden text-black flex flex-col items-center justify-center text-center px-4"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-[85%] h-[160px] object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-4">{item.name}</h3>

              <div className="text-sm w-[90%]">
                {current === 0 ? (
                  <>
                    <p className="mb-4 text-center text-sm">
                      <span className="font-semibold">Origin:</span> {item.origin}
                    </p>
                    <p className="text-center text-sm">
                      <span className="font-semibold">Stock Info:</span> {item.Stock_Information}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-left">
                      <p className="mb-4 text-sm">
                        <span className="font-semibold">Interesting Fact:</span>{" "}
                        {item.Interesting_Facts}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Popular Use:</span>{" "}
                        {item.Popular_Uses}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Arrows */}
              <button
                onClick={() => prevSlide(i)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-black z-10"
              >
                {"<"}
              </button>
              <button
                onClick={() => nextSlide(i)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-black z-10"
              >
                {">"}
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 w-full flex justify-center gap-2">
                {slides.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ${
                      dotIndex === current ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};