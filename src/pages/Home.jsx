
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

const landingRef = useRef(null);
const footerRef = useRef(null);

const [isLandingVisible, setIsLandingVisible] = useState(true);
const [isFooterVisible, setIsFooterVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === landingRef.current) {
          setIsLandingVisible(entry.isIntersecting);
        }
        if (entry.target === footerRef.current) {
          setIsFooterVisible(entry.isIntersecting);
        }
      });
    },
    { threshold: 0.9 }
  );

  if (landingRef.current) observer.observe(landingRef.current);
  if (footerRef.current) observer.observe(footerRef.current);

  return () => {
    if (landingRef.current) observer.unobserve(landingRef.current);
    if (footerRef.current) observer.unobserve(footerRef.current);
  };
}, []);

  const links = [
    {
      title: "mail",
      icon: <img src="/gmail.png" alt="gmail" className="w-full h-full" />,
      href: "mailto:",
    },
    {
      title: "Contact us",
      icon: <img src="/whatsapp.png" alt="whatsapp" className="w-full h-full" />,
      href: "https://wa.me"
    },
    {
      title: "Instagram",
      icon: <img src="/instagrams.png" alt="instagram" className="w-full h-full" />,
      href: "https://www.instagram.com",
    },
  ];

const shouldShowDock = !isLandingVisible && !isFooterVisible;

  return (
    <div id="Home" className="min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Sections */}
      {/* Landing page */}
      <div ref={landingRef}>
  <Landing />
</div>
{/* <div ref={landingMarkerRef} className="h-[1px] w-full" /> */}
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
     {shouldShowDock && (
  <div className="fixed bottom-0 p-4 flex justify-center w-screen shadow-md z-50">
    <FloatingDock mobileClassName="translate-y-0" items={links} />
  </div>
)}
    </div>
  );
};