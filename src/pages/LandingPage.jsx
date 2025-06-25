import { HoverBorderGradient } from "../ui/hover_border";
import { MovingButton } from "../ui/moving_border";

export const Landing = () => {
  return (
    <>
      <div className="h-screen overflow-hidden  font-black bg-gradient-to-r  from-neutral-800 via-neutral-800 to-neutral-800">
        {/* Overlayed Text */}
        <div className="grid grid-cols-[60%_40%] ">
          <div className="">
            {/* <img src="./background.jpeg" alt="" className="rotate-90 h-[1180px]  relative bottom-[150px] opacity-90" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div> */}
            <div className=" relative  w-[100%]  left-15 z-30 top-24 text-6xl md:text-8xl">
              <p className=" font-light  text-indigo-100  ">
                Find The Perfect{" "}
              </p>
              {/* <ColourfulText text="Gemstone Boutique" /> */}
              <p className="  bottom-1 font-light text-indigo-100">Gemstone </p>
              <p className="text-xl  w-[50%] mt-5  text-white font-light">
                With 25 years of expertise in the gemstone industry, we can help
                you find the perfect stone tailored to your needs. Trust our
                legacy to guide your choice with precision and care. 100%
                Natural and lab certified gemstones
              </p>
              <div className="flex gap-10 mt-10">
                <MovingButton>
                <button className=" rounded-lg text-black bg-white font-light uppercase border  px-10 py-2  text-lg">
                  Explore
                </button>
                </MovingButton>
                <MovingButton>
                <button className="flex rounded-lg text-white px-10 py-2 font-light uppercase border    text-lg">
                  Consultation
                </button>
                </MovingButton>
              </div>
              <div className="w-[800px] p-2  grid-cols-2  grid mt-6 bg-white rounded-xl">
                <div className="flex  justify-center items-center">
                <img src="./diploma.png" alt="" className="w-14 h-14 "/>
                <div className="text-xs  m-5 font-normal">
                <p className="text-sm">Certified</p>
                <p>Our brand has legally certified by the authorities. No need to worry because all our product are assured.</p>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <img src="./account.png" alt="" className="w-12 h-12 "/>
                <div className="text-xs m-5 font-normal">
                <p className="text-sm">Authentic Sourcing</p>
                <p>We procure gemstones directly from
                    mines and real sources, ensuring
                    unmatched traceability.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="./back1.png"
                alt=""
                className="rounded-full absolute w-72 top-[20%] right-[23%]"
              />
            </div>
            <div className="w-[800px] mt-[20%] overflow-hidden">
              <img src="./backs2.jpg" alt="" className="rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
