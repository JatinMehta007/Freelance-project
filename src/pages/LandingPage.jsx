
import { cn } from "../lib/utils";
import { HoverBorderGradient } from "../ui/hover_border";
import { MovingButton } from "../ui/moving_border";

export const Landing = () => {


  return (
    <>
      <div className="relative h-screen font-black">
                  <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
          
        {/* Overlayed Text */}
        <div className=" relative text-center w-[100%] mt-[8%] text-6xl md:text-8xl">
          <p className=" bg-gradient-to-b from-neutral-400 to-neutral-600 bg-clip-text  text-transparent">Welcome to</p>
          {/* <ColourfulText text="Gemstone Boutique" /> */}
           <p className=" bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-transparent">Gemstone Boutique</p>
          <p className="text-2xl mx-auto w-[50%] mt-5">
            Handcrafted gemstones tailored to perfection in all shapes, sizes,
            and astrological preferences.Whether you're looking for custom-cut
            gemstones or stones based on astrological needs, we bring your
            vision to life with unmatched craftsmanship.
          </p>
          <div className="flex justify-center items-center pt-10">
            <MovingButton className="p-2">
              {/* <HoverBorderGradient className="text-center flex justify-center items-center"> */}
                <a href="#contact" className="text-white p-2 text-2xl  ">
                  Contact for custom order
                </a>
              {/* </HoverBorderGradient> */}
            </MovingButton>
          </div>
        </div>

  
      </div>
    </>
  );
};
