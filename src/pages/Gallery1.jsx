import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 👈 NEW
import { allSlides } from "../components/allSlides";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Gallery = () => {
  const [indexes, setIndexes] = useState(Array(allSlides.length).fill(0));
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation(); // 👈 NEW

  useEffect(() => {
    const scrollToSection = () => {
      if (location.state?.scrollTo) {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    setTimeout(scrollToSection, 100); // Wait for DOM
  }, [location]);

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

  const filteredSlides = allSlides.filter(
    (slides) =>
      selectedCategory === "all" ||
      slides.some((item) => item.type === selectedCategory)
  );

  return (
    <div>
      <Navbar />
      <div
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        id="Gallery"
        className="bg-neutral-900 min-h-screen w-screen flex flex-col items-center justify-center text-[#B8B7C1]"
      >
        <p className="text-5xl md:text-8xl text-center p-10 pt-20">Gallery</p>

        {/* Dropdown */}
        <div className="mb-8">
          <label className="mr-4 text-lg md:text-xl font-semibold">Stone Type:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 text-white rounded bg-neutral-800 border border-white focus:outline-none "
          >
            <option className="text-black" value="all">All</option>
            <option className="text-black" value="precious">Precious</option>
            <option className="text-black" value="semi-precious">Semi-Precious</option>
            <option className="text-black" value="lab-grown">Lab-grown</option>
          </select>
        </div>

        <div className="border border-[#B8B7C1] w-[70%] mx-auto mb-10"></div>

        <p className="font-normal pb-10 px-2 md:px-0 text-xl md:text-2xl text-center">
          Explore our popular and best selling gemstones
        </p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
          {filteredSlides.map((slides, i) => (
            <div
              key={i}
              className="relative w-[320px] h-[400px] overflow-hidden bg-white"
            >
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
                    className="w-[320px] h-[400px] shrink-0 flex flex-col items-center justify-start text-center text-black"
                  >
                    {/* Top Half */}
                    <div
                      className={`w-full h-[200px] mb-4 flex items-center justify-center ${
                        item.background === "black" ? "bg-black" : "bg-white"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.name}
                        className="max-h-[160px] object-contain"
                      />
                    </div>

                    {/* Bottom Text */}
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>

                    {j === 0 ? (
                      <>
                        <p className="text-sm px-4 py-2">
                          <span className="font-semibold">Origin:</span> {item.origin}
                        </p>
                        <p className="text-sm px-4">
                          <span className="font-semibold">Stock Info:</span> {item.Stock_Information}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm px-4 py-2">
                          <span className="font-semibold">Popular Use:</span> {item.Popular_Uses}
                        </p>
                        <p className="text-sm px-4">
                          <span className="font-semibold">Interesting Fact:</span> {item.Interesting_Facts}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Arrows */}
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
              <div className="absolute bottom-5 w-full flex justify-center gap-2">
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
      <Footer />
    </div>
  );
};