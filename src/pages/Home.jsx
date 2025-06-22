import { useEffect, useRef, useState } from "react";
import { FloatingDock } from "../ui/floating";
import { Landing } from "./LandingPage";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Button } from "./slider";

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
        threshold: 0.3, // Adjust as needed
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
      title: "mail",
      icon: <img src="/gmail.png" alt="gmail" className="w-full h-full" />,
      href: "#gallery",
    },
    {
      title: "Contact us",
      icon: <img src="/whatsapp.png" alt="whatsapp" className="w-full h-full" />,
      href: "#contact",
    },
    {
      title: "Instagram",
      icon: <img src="/instagrams.png" alt="instagram" className="w-full h-full" />,
      href: "#",
    },
  ];

  return (
    <div id="Home" className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <div className="p-4 flex border-b bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800 text-white">
        <div className="flex justify-between items-center w-full text-lg font-mono tracking-wide font-medium px-8">
          <div className="text-3xl font-playfair font-bold text-center">
            Gemstone Boutique
          </div>
          <div className="flex gap-20 text-xl mr-44">
            <a href="#Home" className="hover:text-orange-900">Home</a>
            <a href="#About" className="hover:text-orange-900">About</a>
            <a href="#gallery" className="hover:text-orange-900">Gallery</a>
            <a href="#contact" className="hover:text-orange-900">Contact us</a>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Landing />
      <Button />
      <About />
      <Contact />
      <Footer ref={footerRef} />

      {/* Floating Dock */}
      {!isFooterVisible && (
        <div className="fixed bottom-0 p-4 flex justify-center w-screen shadow-md z-50">
          <FloatingDock mobileClassName="translate-y-0" items={links} />
        </div>
      )}
    </div>
  );
};