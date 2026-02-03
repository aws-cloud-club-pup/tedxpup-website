import { useState, useEffect } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = ["ABOUT", "SPEAKERS", "PROGRAM", "CREATIVE WRITING", "FAQs"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((link) =>
        link.toLowerCase().replace(/ /g, "-"),
      );

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is active (e.g. top within manageable view range)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 transition-all duration-300 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-2xl shadow-md py-4"
            : "bg-black/60 backdrop-blur-2xl shadow-md py-6 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <img
            src="/logo-white.webp"
            alt="TEDxPUP"
            className="h-12 lg:h-14 w-auto object-contain -ml-3"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 text-white hover:text-tedx-red transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const linkId = link.toLowerCase().replace(/ /g, "-");
              return (
                <a
                  key={link}
                  href={`/#${linkId}`}
                  className={`text-sm font-medium transition-colors tracking-wide ${
                    activeSection === linkId
                      ? "text-tedx-red font-bold"
                      : "text-white hover:text-tedx-red"
                  }`}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* CTA Button (Right) */}
          <div className="hidden lg:block">
            <Button
              href="https://ti.to/tedxpup/tedxpup2026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-bold tracking-wider uppercase"
            >
              Get Tickets
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col pt-24 pb-8 overflow-y-auto duration-500 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col items-center space-y-6 px-6 w-full min-h-0">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium hover:text-tedx-red transition-colors tracking-wide text-center w-full py-2 border-b border-white/10 last:border-0"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 w-full max-w-xs mx-auto">
            <Button
              href="https://ti.to/tedxpup/tedxpup2026"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 text-base font-bold tracking-wider uppercase shadow-xl shadow-tedx-red/20"
            >
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
