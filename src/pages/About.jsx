export const About = () => {
  return (
    <>
      <div
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        id="About"
        className="overflow-hidden bg-black min-h-screen"
      >
        <img
          src="/about2.png"
          alt=""
          className="w-[200px] absolute mt-[630px]  h-[200px]"
        />
        <div className="pt-20 px-4">
          <div className="max-w-[90%] md:w-[85%] mx-auto">
            {/* Heading */}
            <h2 className="text-[#CBBBB9] text-6xl font-medium mb-10">
              Know More About Us
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-start">
              {/* Left Column: Text */}
              <div className="text-[#B8B7C1] font-normal  text-xl space-y-6 w-[110%]  tracking-wider z-10">
                <p className="">
                  Welcome to the heart of Gemstones Boutique. We have been
                  dedicated to the art and science of bringing the earth's most
                  precious treasures to life.
                </p>
                <p>
                  With over 25 years of industry experience, our founder
                  recognized a growing gap in customer satisfaction and set out
                  to transform the gemstone buying experience.
                </p>
                <p>
                  What began as a vision a few years ago has now evolved into a
                  trusted name in authentic gemstone sourcing and personalized
                  service.
                </p>
                <p>
                  From the moment you consider a purchase to the final delivery,
                  we’re with you at every step offering expert guidance,
                  transparent processes, and unmatched quality.
                </p>
                <p>
                  From the moment you consider a purchase to the final delivery,
                  we’re with you at every step offering expert guidance,
                  transparent processes, and unmatched quality.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="w-full flex justify-center items-start z-0">
                <img
                  src="/about1.png"
                  alt="Gemstones"
                  className="w-full shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 bg-neutral-800"
      >
        <div className="text-left text-[#FFF7EF] m-20 mt-20">
          <p className="text-8xl  mb-4">Why it all</p>
          <p className="text-8xl ml-[20%] italic mt-10">Began</p>
          <img src="/arrow.png" alt="" className="text-white absolute" />
          <p className="text-xl w-[80%] mt-24 ml-[20%] ">
            Hi, I am Inder. For me it all began when I joined the industry at
            the age of 16. With this venture I wish to create precise gemstones
            and deliver customer vision. Let’s manufature gemstones together!
          </p>
        </div>

        <div className="relative top-12">
          <img
            src="/about6.png"
            alt="Vision Visual"
            className="  object-cover right-0"
          />
          
        </div>
      </div>

      <div>
        <div className="text-left text-white m-20 mt-[20%] absolute ">
          <p className="text-3xl  mb-4 uppercase tracking-wider">Our Vision</p>
          <p className="text-6xl uppercase mt-5 font-bold tracking-wider">
            To redefine
          </p>
          {/* <img src="/arrow.png" alt="" className="text-white absolute" /> */}
          <p className="text-6xl uppercase font-bold tracking-wider">
            precision & trust
          </p>
          <p className="text-lg w-[35%] mt-10 ">
            We aspire to become the most trusted gemstone partner globally in
            next 5-10 years and raise the bar for gemstone manufacturing by
            redefining standards in precision and reliability.
          </p>
          <button className="rounded-full flex justify-center items-center bg-white mt-10 text-black text-xl px-14 py-2">Reach us now <span className="text-2xl absolute ml-44 rounded-full ">→</span></button>
        </div>
        <img src="/vision.jpeg" alt="" className="  w-screen h-screen" />
      </div>
    </>
  );
};
