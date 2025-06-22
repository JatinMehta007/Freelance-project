
import { HoverBorderGradient } from "../ui/hover_border";
import { MovingButton } from "../ui/moving_border";

export const Landing = () => {

  return (
    <>
      <div className="relative  font-black ">
        {/* Overlayed Text */}
        <div className="grid grid-cols-[70%_30%] ">
          <div className="">
        <div className=" relative  font-gentium  w-[100%]  left-15 z-30 top-24 text-6xl md:text-9xl">
          <p className="font-playfair text-black">Welcome to</p>
          {/* <ColourfulText text="Gemstone Boutique" /> */}
          <p className="font-playfair text-black bottom-1">Gemstone Boutique</p>
          <p className="text-2xl  w-[80%] mt-5 text-[#8D4F5B]">
            Handcrafted gemstones tailored to perfection in all shapes, sizes,
            and astrological preferences.Whether you're looking for custom-cut
            gemstones or stones based on astrological needs, we bring your
            vision to life with unmatched craftsmanship.
          </p>
          <div className="flex  pt-10">
            <MovingButton className="">
              <HoverBorderGradient className="text-center flex ">
                <a href="#contact" className="text-[#8D4F5B]  text-2xl  ">
                  Contact for custom order
                </a>
              </HoverBorderGradient>
            </MovingButton>
          </div>
        </div>
          </div>
        <div className="bg-black">
          <div>
            <img src="./" alt="" />
          </div>
          <div className="relative  left-[50%]">
          <img src="./back.jpeg" alt="" className="rounded-full rounded-t-4xl" />
        </div>
        <div className="relative  left-[50%] rotate-180">
          <img src="./back.jpeg" alt="" className="rounded-full rounded-t-4xl" />
        </div>
        </div>
        </div>

      
      </div>
    </>
  );
};
