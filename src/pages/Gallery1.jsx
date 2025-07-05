import { useState } from "react";
import { allSlides } from "../components/allSlides";  // Adjust the path as needed

export const Gallery = () => {
  const [indexes, setIndexes] = useState(Array(allSlides.length).fill(0));

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
      className="bg-black min-h-screen w-screen flex flex-col items-center justify-center text-[#B8B7C1]"
    >
      <p className="text-8xl text-center p-10">Gallery</p>
      <div className="border border-[#B8B7C1] w-[70%] mx-auto mb-10"></div>
      <p className="font-normal pb-10 text-2xl text-center">
        We design People Inspired Experiences that create <br />
        <span>positive change in people's lives</span>
      </p>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
        {allSlides.map((slides, i) => (
          <div
            key={i}
            className="relative w-[320px] h-[400px] overflow-hidden bg-white rounded-lg"
          >
            {/* Slide wrapper */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${indexes[i] * 320}px)`,
                width: `${slides.length * 320}px`,
              }}
            >
              {slides.map((item, j) => (
                <div
                  key={j}
                  className="w-[320px] h-[400px] shrink-0 flex flex-col items-center justify-center px-4 text-center text-black"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-[85%] h-[160px] object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>

                  {j === 0 ? (
                    <>
                      <p className="text-sm mb-2">
                        <span className="font-semibold">Origin:</span>{" "}
                        {item.origin}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Stock Info:</span>{" "}
                        {item.Stock_Information}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm mb-2">
                        <span className="font-semibold">Popular Use:</span>{" "}
                        {item.Popular_Uses}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Interesting Fact:</span>{" "}
                        {item.Interesting_Facts}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => prevSlide(i)}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black z-10"
            >
              {"<"}
            </button>
            <button
              onClick={() => nextSlide(i)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black z-10"
            >
              {">"}
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 w-full flex justify-center gap-2">
              {slides.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${
                    dotIndex === indexes[i] ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};