import { useEffect, useRef, useState } from "react";
import { FloatingDock } from "../ui/floating";
import { Landing } from "./LandingPage";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Button } from "./slider";
import { TestimonialSlider } from "./testimonials";
import { Navbar } from "./Navbar";

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
    <div id="Home" className="min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Sections */}
      {/* Landing page */}
      <Landing />
      {/* Slider */}
      <Button />
      {/* About */}
      <About />
      {/* Testimonial */}
      <TestimonialSlider></TestimonialSlider>
      {/* Contact */}
      <Contact />
      <hr  className="text-white"/>
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