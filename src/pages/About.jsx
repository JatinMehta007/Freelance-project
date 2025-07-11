export const About = () => {
  return (
    <>
      <div
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        id="About"
        className="overflow-hidden bg-black "
      >
        <img
          src="/about2.png"
          alt=""
          className="w-[150px] sm:w-[180px] md:w-[200px] absolute mt-[520px] md:mt-[570px] h-[150px] sm:h-[180px] md:h-[200px]"
        />
        <div className="lg:pt-20 pt-10">
          <div className="max-w-[100%] mx-auto">
            <h2 className="text-[#CBBBB9] ml-6 sm:ml-12 md:ml-24 text-4xl sm:text-5xl md:text-6xl font-medium mb-10">
              Know More About Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 items-start">
              <div className="text-[#B8B7C1] font-normal text-base sm:text-lg md:text-xl space-y-6 w-[90%] ml-6 sm:ml-12 md:ml-24 tracking-wider z-10">
                <p>
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
              <div className="w-full flex justify-center items-end z-0 mt-10 md:mt-0">
                <img
                  src="/about1.png"
                  alt="Gemstones"
                  className="w-[80%] hidden lg:block md:ml-[25%]  shadow-lg object-cover relative bottom-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* about us  */}
<div
  style={{ fontFamily: '"Times New Roman", Times, serif' }}
  className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 bg-neutral-800 lg:h-screen h-[800px] items-center"
>
  <div className="text-left text-[#FFF7EF] m-6 sm:m-12 md:m-24 mt-32 md:mt-0">
    <p className="text-6xl md:text-8xl mb-4">Why it all</p>
    <p className="text-5xl sm:text-6xl md:text-8xl italic mt-5 sm:ml-[24%]">
      Began
    </p>
    <img
      src="/arrow.png"
      alt=""
      className="text-white absolute w-10 sm:w-14"
    />
    <p className="text-base sm:text-lg md:text-xl text-[#B8B7C1] font-normal w-[90%] sm:w-[80%] mt-16 sm:mt-24 sm:ml-[24%]">
      Hi, I am Inder. For me it all began when I joined the industry at
      the age of 16. With this venture I wish to create precise gemstones
      and deliver customer vision. Let’s manufacture gemstones together!
    </p>
  </div>

  <div className="flex justify-center items-center">
    <img
      src="/about6.png"
      alt="Vision Visual"
      className="object-cover w-[75%] sm:w-[65%] relative bottom-9 lg:bottom-0"
    />
  </div>
</div>

      {/* about us */}
     <div className="relative flex items-center lg:h-screen h-[400px]">
  
  <div className="absolute  text-left text-white m-6 sm:m-12 md:m-24   z-10">
    <p className="text-2xl md:text-4xl mb-4 uppercase tracking-wider">
      Our Vision
    </p>
    <p className="text-4xl sm:text-5xl md:text-7xl uppercase mt-5 font-bold tracking-wider">
      To redefine
    </p>
    <p className="text-4xl sm:text-5xl md:text-7xl uppercase font-bold tracking-wider">
      precision & trust
    </p>
    <p className="text-sm sm:text-base md:text-xl w-full sm:w-[70%] md:w-[35%] mt-6 sm:mt-10">
      We aspire to become the most trusted gemstone partner globally in
      next 5-10 years and raise the bar for gemstone manufacturing by
      redefining standards in precision and reliability.
    </p>
    
  </div>

  <img
    src="/vision.jpg"
    alt=""
    className="w-full h-full object-cover brightness-50 lg:brightness-100 z-0 "
  />
</div>
    </>
  );
};