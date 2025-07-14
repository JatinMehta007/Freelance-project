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
  const landingRef = useRef(null);     // 👈 to track landing
const footerRef = useRef(null);      // 👈 to track footer

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
    {
      threshold: 0.1,
    }
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
      href: "mailto:gemstonesboutique7@gmail.com",
    },
    {
      title: "Contact us",
      icon: <img src="/whatsapp.png" alt="whatsapp" className="w-full h-full" />,
      href: "https://wa.me/919929977744"
    },
    {
      title: "Instagram",
      icon: <img src="/instagrams.png" alt="instagram" className="w-full h-full" />,
      href: "https://www.instagram.com/gemboutique_jaipur?igsh=MTR2dDdtcmJkMm9qcw%3D%3D&utm_source=qr",
    },
  ];

  const shouldShowDock = !isLandingVisible && !isFooterVisible;

  return (
    <div id="Home" className="min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Sections */}
      {/* Landing page */}
      <Landing ref={landingRef}/>
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