import { HoverBorderGradient } from "../ui/hover_border";
import { MovingButton } from "../ui/moving_border";

export const Landing = () => {
  return (
    <>
      <div style={{ fontFamily: '"Times New Roman", Times, serif' }}   className="h-screen overflow-hidden    bg-gradient-to-r  from-neutral-800 via-neutral-800 to-neutral-800">
        {/* Overlayed Text */}
        <div className="grid grid-cols-[40%_60%] ">
          <div className="">
            <div className=" relative  w-[100%]  left-20 z-30 top-32 text-6xl md:text-7xl">
              <p  className=" font-normal font-s text-[#CBBBB9]  ">
                Find The Perfect{" "}
              </p>
              {/* <ColourfulText text="Gemstone Boutique" /> */}
              <p className="  mt-4 font-normal text-[#CBBBB9]">Gemstone </p>
              <p className="text-lg  w-[83%] mt-5 font-normal text-[#B8B7C1] ">
                With 25 years of expertise in the gemstone industry, we can help
                you find the perfect stone tailored to your needs. Trust our
                legacy to guide your choice with precision and care. 100%
                Natural and lab certified gemstones
              </p>
              <div className="flex gap-10 mt-12">
                <MovingButton>
                <button className="  text-black bg-[#EFEDE8] font-normal uppercase border  px-10 py-2  text-lg">
                  Explore
                </button>
                </MovingButton>
                <MovingButton>
                <button className="flex text-white px-10 py-2 font-normal uppercase border    text-lg">
                  Consultation
                </button>
                </MovingButton>
              </div>
              <div>

              </div>
              <div className="w-[750px] absolute px-8 py-6 grid-cols-2  grid mt-12 bg-white rounded-xl">
                <div className="flex  justify-center items-center ">
                <img src="./diploma.png" alt="" className="w-14 h-14  "/>
                <div className="text-xs  w-[70%] text-[#2B391F] ml-3">
                <p className="text-sm font-bold">Certified</p>
                <p className="font-normal tracking-wider">Our brand has legally certified by the authorities. No need to worry because all our product are assured.</p>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <img src="./account.png" alt="" className="w-12 h-12 "/>
                <div className="text-xs w-[70%] text-[#2B391F] ml-3">
                <p className="text-sm font-bold">Authentic Sourcing</p>
                <p className="font-normal tracking-wider">We procure gemstones directly from
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
                className="rounded-full absolute w-72 top-[18%] right-[30%]"
              />
            </div>
            <div className="lg:w-[100%] ml-40   mt-[15%]  overflow-hidden">
              <img src="./backs2.jpg" alt="" className="rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
