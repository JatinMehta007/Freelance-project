import { useState, useEffect, useRef } from "react";

export const Button = () => {
  const slides = [
    "/blackonyxs.jpg",
    "/image/tiger.png",
    "/image/image copy 3.png",
    "/peridot1.jpg",
    "/slide (1).jpg",
    "/luminous.png",
    "/image/luminouss.png",
    "/oyster.jpeg",
    "/sapphire.png",
    "/green.png",
    "/ruby2.jpg.png",
    "/back-.png",
  ];

  const visibleCount = 4;
  const groupCount = Math.ceil(slides.length / visibleCount);

  const slideGroups = Array.from({ length: groupCount }, (_, i) =>
    slides.slice(i * visibleCount, i * visibleCount + visibleCount)
  );

  const extendedGroups = [
    slideGroups[slideGroups.length - 1],
    ...slideGroups,
    slideGroups[0],
  ];

  const [currentGroup, setCurrentGroup] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const goToGroup = (index) => {
    setIsTransitioning(true);
    setCurrentGroup(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToGroup(currentGroup + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  useEffect(() => {
    if (currentGroup === extendedGroups.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentGroup(1);
      }, 700);
    } else if (currentGroup === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentGroup(extendedGroups.length - 2);
      }, 700);
    }
  }, [currentGroup]);

  return (
    <div className="hidden md:block pt-14 bg-neutral-700 overflow-hidden">
      {/* Slider */}
      <div className="w-full overflow-hidden flex justify-center">
        <div
          ref={sliderRef}
          className={`flex ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${currentGroup * 100}%)`,
            width: `${extendedGroups.length * 100}%`,
          }}
        >
          {extendedGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex gap-10 justify-center w-full shrink-0"
            >
              {group.map((img, index) => (
                <div
                  key={index}
                  className="w-[22%] h-[262px] rounded-xl overflow-hidden flex justify-center items-center bg-white"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center items-center space-x-4 py-7">
        {Array.from({ length: groupCount }).map((_, i) => (
          <div
            key={i}
            className={`h-[4px] w-10 rounded-full transition-all duration-300 ${
              i + 1 === currentGroup ? "bg-yellow-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};