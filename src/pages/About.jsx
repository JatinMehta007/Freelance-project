export const About = () => {
  return (
    <>
      <div
        id="About"
        className="relative overflow-hidden bg-black text-center min-h-screen"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/shiny.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 px-6 md:px-10">
          <div className="max-w-6xl mx-auto py-20">
            <p className="text-indigo-100 text-6xl uppercase font-medium mb-6">
              Know more About US
            </p>
            <p className="text-indigo-100 text-2xl mb-10">
              About Our Brand & Journey
            </p>

            <div className="text-neutral-200 text-lg text-left mx-auto w-full md:w-[80%]">
              <p className="mb-4">
                Welcome to the heart of Gemstones Boutique. We have been
                dedicated to the art and science of bringing the earth's most
                precious treasures to life. With over 25 years of industry
                experience, our founder recognized a growing gap in customer
                satisfaction and set out to transform the gemstone buying
                experience.
              </p>
              <p className="mb-4">
                Our gemstone manufacturing business has been delivering
                unparalleled quality and craftsmanship. Based in India, we take
                pride in offering premium semi-precious stones that cater to
                diverse client needs across the country.
              </p>
              <p className="mb-4">
                What began as a vision a few years ago has now evolved into a
                trusted name in authentic gemstone sourcing and personalized
                service. With a foundation rooted in 30 years of industry
                expertise, we specialize in the art of gemstone manufacturing.
                For the past 6 years, our commitment to excellence has earned us
                a reputation as a trusted partner for clients across India.
              </p>
              <p className="mb-4">
                From the moment you consider a purchase to the final delivery,
                we’re with you at every step—offering expert guidance,
                transparent processes, and unmatched quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 bg-black">
        <div className="text-left text-white m-20 mt-10">
          <p className="text-5xl text-indigo-100 mb-4">Our Vision</p>
          <p className="text-lg w-[80%]">
            To be the premier global network for chefs where culinary talent is
            recognized and rewarded, leading to a community that elevates the
            culinary arts and inspires chefs to achieve their full potential,
            both creatively and financially. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Alias exercitationem iste atque
            repellat dicta minima ad ea non id nihil et dolorem odit
            reprehenderit, laborum enim quasi quam laboriosam optio?
          </p>
        </div>

        <div className="relative">
          <img
            src="/back.jpeg"
            alt="Vision Visual"
            className="h-96 w-full object-cover opacity-60"
          />
          <div className="absolute bottom-0 left-0 w-48 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};