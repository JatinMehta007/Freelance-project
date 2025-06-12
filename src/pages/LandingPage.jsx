import { ColourfulText } from "../ui/colorful";
import { DraggableCardBody } from "../ui/dragable";
import { HoverBorderGradient } from "../ui/hover_border";
import { MovingButton } from "../ui/moving_border";

export const Landing = () => {
  const items = [
    {
      title: "tigers",
      image: "./tigers.jpg",
      className: "absolute top-1 left-[0%] rotate-[-5deg]",
    },
    {
      title: "Blackonyx",
      image: "./public/blackonyx.jpg",
      className: "absolute top-90 left-[0%] rotate-[-20deg]",
    },
    {
      title: "Lapis",
      image: "./lapis.jpg",
      className: "absolute top-5 right-[0%] rotate-[8deg]",
    },
    {
      title: "Oyster",
      image: "./oyster.jpeg",
      className: "absolute top-90 right-[0%] rotate-[30deg]",
    },
  ];

  return (
    <>
      <div className="relative  font-black">
        {/* Overlayed Text */}
        <div className="absolute  text-center w-[100%] top-[20%] left-1/2 z-30 -translate-x-1/2 text-6xl md:text-8xl">
          <p>Welcome to</p>
          <ColourfulText text="Gemstone Boutique" />
          <p className="text-2xl mx-auto w-[50%] mt-5">
            Handcrafted gemstones tailored to perfection in all shapes, sizes,
            and astrological preferences.Whether you're looking for custom-cut
            gemstones or stones based on astrological needs, we bring your
            vision to life with unmatched craftsmanship.
          </p>
          <div className="flex justify-center items-center pt-10">
            <MovingButton className="">
              <HoverBorderGradient className="text-center flex justify-center items-center">
                <a href="" className="text-black   text-2xl  ">
                  Contact for custom order
                </a>
              </HoverBorderGradient>
            </MovingButton>
          </div>
        </div>

        {/* Draggable Images */}
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-clip z-10">
          {items.map((item) => (
            <DraggableCardBody key={item.title} className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </div>
      </div>
    </>
  );
};
