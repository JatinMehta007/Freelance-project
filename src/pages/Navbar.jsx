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
  if (route) {
    navigate(route);
    setIsMenuOpen(false);

    if (section === "Home") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  } else {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (section === "Home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false);
      } else if (section === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  }
};
  const linkClass = (section) =>
    `cursor-pointer transition duration-300 hover:text-blue-300 ${
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
    <div
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
     className="fixed top-0 left-0 right-0 z-50 w-full bg-neutral-800 text-[#EAEFF3] px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between font-mono tracking-wide font-medium overflow-x-hidden"
    >
      <div className="text-xl sm:text-2xl tracking-wider font-bold ml-2 sm:ml-6 md:ml-14 whitespace-nowrap">
        Gemstones Boutique
      </div>

      <div className="hidden md:flex gap-6 lg:gap-16 mr-4 sm:mr-10 md:mr-20 text-sm sm:text-base md:text-lg">
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

      <div className="md:hidden mr-4 sm:mr-6 z-50 ">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900 text-white flex flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 md:hidden">
          {navItems.map(({ id, label, route }) => (
            <span
              key={id}
              onClick={() => handleNavClick(id, route)}
              className={`text-base sm:text-lg ${linkClass(id)}`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};