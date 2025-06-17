import {
  IconBrandInstagram,
  IconBrandX,
  IconHome,
  IconInfoCircle,
  IconPhoto,
  IconPhone,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating";
import { Landing } from "./LandingPage";
import { About } from "./About";
import { ColourfulText } from "../ui/colorful";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useEffect, useRef, useState } from "react";

export const Home = () => {

  const footerRef = useRef(null);
const [isFooterVisible, setIsFooterVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  if (footerRef.current) {
    observer.observe(footerRef.current);
  }

  return () => {
    if (footerRef.current) {
      observer.unobserve(footerRef.current);
    }
  };
}, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Home",
    },

    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#About",
    },
    {
      title: "Gallery",
      icon: (
        <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#gallery",
    },
    {
      title: "Contact us",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
  <div id="Home" className="bg-[#F8F9FA]   min-h-screen flex flex-col justify-between">
    {/* Navbar */}
    <div className="p-4 flex   border-b">
      {/* <p className="text-xl font-bold tracking-wide">Gemstone Boutique</p> */}
        
   <div className="flex justify-around items-center w-full font-playfair text-lg font-mono tracking-wide font-medium px-8">
  {/* Left */}
  <div className="flex gap-36">
    <a href="#Home" className="hover:text-orange-900">Home</a>
    <a href="#About" className="hover:text-orange-900">About</a>
  </div>

  {/* Center */}
  <div className="text-3xl font-bold text-[#C5A253] text-center">
    Gemstone Boutique
  </div>

  {/* Right */}
  <div className="flex gap-36">
    <a href="#gallery" className="hover:text-orange-900">Gallery</a>
    <a href="#contact" className="hover:text-orange-900">Contact us</a>
  </div>
</div>
    </div>
    {/* Landing page */}
    <Landing></Landing>
    {/* About section */}

    <div className="border-b border-neutral-400"></div>
    <About ></About>
    <div className="border-b border-neutral-400"></div>
    {/* //Gallery */}
    <Gallery></Gallery>
    <div className="border-b border-neutral-400"></div>
    {/* Contact us */}
    <Contact></Contact>
    {/* Footer  */}
    <Footer ref={footerRef} />
{!isFooterVisible && (
  <div className="fixed bottom-0 p-4 flex justify-center w-screen shadow-md z-50">
    <FloatingDock mobileClassName="translate-y-0" items={links} />
  </div>
)}
  </div>
);
};
