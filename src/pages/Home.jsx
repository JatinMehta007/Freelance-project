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
import { cn } from "../lib/utils";

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
        <IconHome className="h-full w-full text-white " />
      ),
      href: "#Home",
    },

    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-white " />
      ),
      href: "#About",
    },
    {
      title: "Gallery",
      icon: (
        <IconPhoto className="h-full w-full text-white " />
      ),
      href: "#gallery",
    },
    {
      title: "Contact us",
      icon: (
        <IconPhone className="h-full w-full text-white " />
      ),
      href: "#contact",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white " />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-white " />
      ),
      href: "#",
    },
  ];

  return (
  <div id="Home"  className="bg-gradient-to-r  from-zinc-900 via-zinc-950 to-zinc-900 min-h-screen text-white flex flex-col justify-between">
    <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
    {/* Navbar */}
    <div className="p-4 flex justify-between  border-b">
        <div className="relative text-2xl ml-4 font-bold">
          <p>Gemstone Boutique</p>
        </div>
    <div className="relative flex  justify-around  gap-8 w-1/2 font-mono tracking-wide font-medium">
      <a href="#Home" className="hover:text-orange-900"> Home</a>
      <a href="#About" className="hover:text-orange-900"> About</a>
      <a href="#gallery" className="hover:text-orange-900"> Gallery</a>
      <a href="#contact" className="hover:text-orange-900"> Contact us</a>
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
