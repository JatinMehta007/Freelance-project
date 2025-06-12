export const About = () => {
  

  return (
    <div id="About" className="overflow-hidden mb-10">
      <p className=" text-center text-7xl tracking-wide font-black pt-10">About</p>
      <div className="grid grid-cols-[60%_40%]  gap-8 items-start">
        <div>
          <p className="text-5xl font-semibold   mb-6 mt-10 m-20">
            Manufacturers of Semi-Precious Gemstones and Fashion Jewelry
          </p>
          <div className="mx-20 text-wrap  w-[80%] ">
          <p className="mb-4">
            Our gemstone manufacturing business has been delivering unparalleled quality and craftsmanship. Based in India, we take pride in offering premium semi-precious stones that cater to diverse client needs across the country.
          </p>
          <p className="mb-4">
            With a foundation rooted in 30 years of industry expertise, we specialize in the art of gemstone manufacturing. For the past 6 years, our commitment to excellence has earned us a reputation as a trusted partner for clients across India. Every gemstone we create is handcrafted to meet the highest standards of quality, ensuring that each piece reflects our dedication to precision and beauty.
          </p>
          <p>
            Whether you're looking for custom-cut gemstones or stones based on astrological needs, we bring your vision to life with unmatched craftsmanship.
          </p>
          </div>
        </div>

        <div className="bg-red-400 w-full mt-20">
          {/* You can replace this with an image or content */}
          <img src="./image1.png" alt="" className="absolute h-42 right-[3%]" />
          <img src="./image2.png" alt="" className="absolute h-42 left-[60%] "/>
          <img src="./image3.png" alt="" className="absolute h-42 top-[153%]  "/>
          <img src="./image4.png" alt="" className="absolute h-42 top-[153%] right-[2%] "/>
          <img src="./image5.png" alt="" className="absolute h-42 left-[70%]"/>
          <img src="./image6.png" alt="" className="absolute  h-42 left-[72%] top-[153%]"/>
          
        </div>
      </div>
    </div>
  );
};