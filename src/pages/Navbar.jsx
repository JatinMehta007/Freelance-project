import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/gallery") {
      setActiveSection("Gallery");
    } else if (location.pathname === "/") {
      setActiveSection("Home");
    }

    const sectionIds = ["Home", "About", "Gallery", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY < 100 && location.pathname === "/") {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleNavClick = (section, route) => {
    const scrollToSection = () => {
      const el = document.getElementById(section);
      if (el) {
        const yOffset = -70; // Offset for fixed navbar (h-16 = 64px)
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setIsMenuOpen(false);
      } else if (section === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMenuOpen(false);
      }
    };
if (route) {
  navigate(route, { state: { scrollTo: section } });
  setIsMenuOpen(false);

  if (section === "Home") {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
} else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToSection, 100);
      } else {
        scrollToSection();
      }
    }
  };

  const linkClass = (section) =>
    `inline-block w-fit cursor-pointer transition duration-300 hover:text-blue-300 ${
      activeSection === section
        ? "border-b-2 border-white"
        : "border-b-2 border-transparent"
    }`;

  const navItems = [
    { id: "Home", label: "Home", route: "/" },
    { id: "About", label: "About Us" },
    { id: "Gallery", label: "Gallery", route: "/gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-neutral-800 text-[#EAEFF3] px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between font-mono tracking-wide font-medium"
      >
        <div className="text-xl sm:text-2xl tracking-wider font-bold sm:ml-4 lg:ml-14 whitespace-nowrap">
          Gemstones Boutique
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 lg:gap-16 mr-4 sm:mr-10 md:mr-20 text-sm sm:text-base md:text-lg">
          {navItems.map(({ id, label, route }) => (
            <span
              key={id}
              onClick={() => handleNavClick(id, route)}
              className={linkClass(id)}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden mr-4 sm:mr-6 z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-neutral-900 text-white flex flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:hidden z-40">
          {navItems.map(({ id, label, route }) => (
            <span
              key={id}
              onClick={() => handleNavClick(id, route)}
              className={`inline-block w-fit text-base sm:text-lg ${linkClass(id)}`}
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Optional: Click outside to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};