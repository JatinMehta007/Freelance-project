import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["Home", "About", "gallery", "contact"];

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
      if (window.scrollY < 100) {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); 
    }
  };

  const linkClass = (section) =>
    `cursor-pointer transition duration-300 hover:text-blue-300 ${
      activeSection === section
        ? "border-b-2 border-white"
        : "border-b-2 border-transparent"
    }`;

  return (
    <div className="fixed top-0 left-0 right-0 text-blu z-50 bg-neutral-800 text-white px-6 md:px-10 h-16 flex items-center justify-between font-mono tracking-wide font-medium">
      <div className="text-2xl font-playfair font-bold">Gemstone Boutique</div>

      <div className="hidden md:flex gap-10 text-lg">
        {["Home", "About", "gallery", "contact"].map((section) => (
          <span
            key={section}
            onClick={() => handleNavClick(section)}
            className={linkClass(section)}
          >
            {section === "contact" ? "Contact us" : section}
          </span>
        ))}
      </div>

      <div className="md:hidden z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900 text-white flex flex-col gap-6 px-6 py-6 md:hidden">
          {["Home", "About", "gallery", "contact"].map((section) => (
            <span
              key={section}
              onClick={() => handleNavClick(section)}
              className={`text-lg ${linkClass(section)}`}
            >
              {section === "contact" ? "Contact us" : section}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};