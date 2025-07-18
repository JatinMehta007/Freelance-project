import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../ui/hover_border";
import { MovingButton } from "../ui/moving_border";
import { forwardRef } from "react";

export const Landing = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="Home"  ref={ref}
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        className="xl:h-screen sm:h-[600px] md:h-[700px] lg:h-[750px] pb-10 md:pb-0 h-full w-screen overflow-hidden flex-col  items-center  bg-gradient-to-r  from-neutral-800 via-neutral-800 to-neutral-800"
      >
        {/* Overlayed Text */}
        <div className="xl:grid xl:grid-cols-[40%_60%] ">
          <div className="">
            <div className=" relative  w-[100%]  left-5 sm:left-10 lg:left-20 xl:left-24  z-30 top-20 md:top-32 text-[40px] sm:text-6xl md:text-7xl">
              <p className=" font-normal   text-[#CBBBB9]  md:pr-0  ">
                Find The Perfect{" "}
              </p>
              {/* <ColourfulText text="Gemstone Boutique" /> */}
              <p className=" md:mt-4 font-normal text-[#CBBBB9] leading-6 sm:leading-16  ">
                Gemstone{" "}
              </p>
              <p className="text-base md:text-lg   w-[83%] lg:w-[500px] xl:w-[83%] mt-9 md:mt-5 font-normal text-[#B8B7C1] md:w-[500px] ">
                With 25 years of expertise in the gemstone industry, we can help
                you find the perfect stone tailored to your needs. Trust our
                legacy to guide your choice with precision and care. 100%
                Natural and lab certified gemstones
              </p>
              <div className="flex gap-5 lg:gap-10 mt-9 sm:mt-12 ">
                <MovingButton>
                  <button
                    onClick={() => {
                      navigate("/gallery");
                    }}
                    className=" cursor-pointer text-black bg-[#EFEDE8]  font-normal uppercase border  px-7 sm:px-10 py-2  text-base md:text-lg"
                  >
                    Explore
                  </button>
                </MovingButton>
                <MovingButton>
                  <a
                    href="#contact"
                    className="flex text-white px-4 sm:px-10 py-2 font-normal uppercase border   text-base md:text-lg"
                  >
                    Consultation
                  </a>
                </MovingButton>
              </div>
              <div></div>
              <div>
                <div className="w-[90%] md:w-[65%] lg:w-[750px]  lg:absolute mb-20 sm:mb-0 py-2 px-2  md:px-4 md:py-4 lg:px-8 lg:py-6 grid-cols-2 grid mt-12 bg-white rounded-xl  md:mx-0">
                  <div className="flex justify-center">
                    <img
                      src="./diploma.png"
                      alt=""
                      className="lg:w-14 lg:h-14 w-8 h-8"
                    />
                    <div className="text-xs w-[78%] lg:w-[70%] text-[#2B391F] ml-2 lg:ml-3">
                      <p className="lg:text-sm font-bold">Certified</p>
                      <p className="font-normal lg:tracking-wider">
                        Our brand has legally certified by the authorities. No
                        need to worry because all our product are assured.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      src="./account.png"
                      alt=""
                      className="lg:w-12 lg:h-12 w-8 h-8"
                    />
                    <div className="text-xs w-[68%] text-[#2B391F] ml-2 lg:ml-3">
                      <p className="text-xs lg:text-sm font-bold">
                        Authentic Sourcing
                      </p>
                      <p className="font-normal lg:tracking-wider">
                        We procure gemstones directly from mines and real
                        sources, ensuring unmatched traceability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="./back1.png"
                loading="lazy"
                alt=""
                className="rounded-full hidden lg:block md:right-[23%]  absolute  lg:w-60 xl:w-68  xl:top-[18%] lg:right-[25%] xl:right-[30%]"
              />
            </div>
            <div className="">
              <div className="xl:w-[100%]  md:w-[80%] md:ml-[600px] md:-mt-96   lg:w-[65%] xl:ml-40 lg:ml-[600px] xl:mt-[15%] lg:-mt-44 overflow-hidden">
                <img
                  src="./backs2.jpg"
                  alt=""
                  className="rounded-full hidden md:block w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
