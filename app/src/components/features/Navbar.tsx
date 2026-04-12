import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      navigate("/", { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
      window.scrollTo(0, 0);
    }
  };

  const navLinks = ["ABOUT","EVENTS", "SPEAKERS", "CREATIVE WRITING ENTRIES", "SPONSORS & PARTNERS", "FAQs"];

  // Map display names to section IDs
  const getLinkId = (link: string) => {
    if (link === "CREATIVE WRITING ENTRIES") {
      return "creative-writing";
    }
    if (link === "SPONSORS & PARTNERS") {
      return "sponsors-partners";
    }
    return link.toLowerCase().replace(/ /g, "-");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection - check which section's top is closest to the viewport top
      const sections = navLinks.map((link) => getLinkId(link));
      const offset = 150; // Offset to account for navbar

      let current = "";

      // Iterate through sections in reverse so later sections take precedence when overlapping
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        // Debug: log all sections
        console.log(`Checking section: ${section}, element found: ${!!element}`);

        // Only check sections if we are on the home page
        if (location.pathname === "/" && element) {
          const rect = element.getBoundingClientRect();
          console.log(`Section ${section}: top=${rect.top}, bottom=${rect.bottom}, offset=${offset}`);

          // Section is active if its top is above the offset threshold and its bottom is still below it
          if (rect.top <= offset && rect.bottom > offset) {
            current = section;
            console.log(`Active section found: ${section}`);
            break; // Found the lowest section that's in view, stop here
          }
        }
      }

      console.log(`Final activeSection: ${current}`);
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // Update dependency

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 transition-all duration-300 ${isScrolled
          ? "bg-black/70 backdrop-blur-2xl shadow-md py-4"
          : "bg-black/70 backdrop-blur-2xl shadow-md py-6 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none"
          }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <img
              src="/logo-white.webp"
              alt="TEDxPUP"
              className="h-12 lg:h-14 w-auto object-contain -ml-3"
            />
          </div>

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
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 -translate-x-1/2 w-max">
            {navLinks.map((link) => {
              const linkId = getLinkId(link);
              return (
                <a
                  key={link}
                  href={`/#${linkId}`}
                  className={`text-sm font-semibold transition-colors ${activeSection === linkId
                    ? "text-tedx-red"
                    : "text-white hover:text-tedx-red"
                    }`}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* CTA Button (Right) - Hidden as event ended */}
          {/* <div className="hidden lg:block">
            <Button
              href="https://ti.to/tedxpup/tedxpup2026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(230,43,31,0.6)] hover:shadow-[0_0_30px_rgba(230,43,31,0.8)] scale-[0.95] transition-all bg-tedx-red border-none"
            >
              Get Tickets
            </Button>
          </div> */}
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col pt-24 pb-8 overflow-y-auto duration-500 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col items-center space-y-6 px-6 w-full min-h-0">
          {navLinks.map((link) => {
            const linkId = getLinkId(link);
            return (
              <a
                key={link}
                href={`/#${linkId}`}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-semibold transition-colors text-center w-full py-2 border-b border-white/10 last:border-0 ${
                  activeSection === linkId ? "text-tedx-red" : "text-white hover:text-tedx-red"
                }`}
              >
                {link}
              </a>
            );
          })}
          {/* <div className="pt-4 w-full max-w-xs mx-auto">
            <Button
              href="https://ti.to/tedxpup/tedxpup2026"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 text-base font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(230,43,31,0.6)] hover:shadow-[0_0_30px_rgba(230,43,31,0.8)] scale-[0.95] transition-all bg-tedx-red border-none"
            >
              Get Tickets
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
