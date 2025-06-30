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
          className="w-[200px] absolute mt-[570px]  h-[200px]"
        />
        <div className="pt-20 ">
          <div className="max-w-[100%] mx-auto">
            {/* Heading */}
            <h2 className="text-[#CBBBB9] ml-24 text-6xl font-medium  mb-10">
              Know More About Us
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1  md:grid-cols-2 items-start">
              {/* Left Column: Text */}
              <div className="text-[#B8B7C1]  font-normal  text-xl space-y-6 w-[90%] ml-24  tracking-wider z-10">
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
              </div>
              <div className="w-full flex justify-center items-end z-0">
                <img
                  src="/about1.png"
                  alt="Gemstones"
                  className="w-[80%] ml-[25%] shadow-lg object-cover relative bottom-10"
                />
              </div>

              {/* Right Column: Image */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 bg-neutral-800"
      >
        <div className="text-left text-[#FFF7EF] m-24 mt-20">
          <p className="text-8xl  mb-4">Why it all</p>
          <p className="text-8xl ml-[24%] italic mt-10">Began</p>
          <img src="/arrow.png" alt="" className="text-white absolute" />
          <p className="text-xl text-[#B8B7C1]   font-normal w-[80%] mt-24 ml-[24%] ">
            Hi, I am Inder. For me it all began when I joined the industry at
            the age of 16. With this venture I wish to create precise gemstones
            and deliver customer vision. Let’s manufature gemstones together!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/about6.png"
            alt="Vision Visual"
            className="  object-cover w-[65%] relative bottom-1"
          />
        </div>
      </div>

      <div>
        <div className="text-left text-white m-24 mt-[20%] absolute ">
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
          <button className="rounded-full flex justify-center items-center bg-white mt-10 text-black text-xl px-16 py-2">
            Reach us now
            <span className="text-xl w-10 h-10 flex items-center justify-center absolute ml-48 rounded-full bg-[radial-gradient(circle_at_50%_50%,_#fae4db,_#cfbaba,_#fffafa)]">
              →
            </span>
          </button>
        </div>
        <img src="/vision.jpg" alt="" className="  w-screen h-screen" />
      </div>
    </>
  );
};
