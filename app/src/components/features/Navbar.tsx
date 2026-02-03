import { useState } from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ['ABOUT', 'SPEAKERS', 'PROGRAM', 'CREATIVE WRITING ENTRIES', 'PARTNERS', 'FAQS'];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 bg-black/60 backdrop-blur-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.08)]">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src="/logo-white.webp" alt="TEDxPUP" className="h-12 lg:h-14 w-auto object-contain -ml-3" />

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 text-white hover:text-tedx-red transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`/#${link.toLowerCase().replace(/ /g, '-')}`} 
                className="text-white text-sm font-medium hover:text-tedx-red transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
            
            <Button href="/#tickets" className="px-6 py-3 text-sm font-bold tracking-wider uppercase">
              Get Tickets
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col pt-24 pb-8 overflow-y-auto duration-500 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-6 px-6 w-full min-h-0">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`/#${link.toLowerCase().replace(/ /g, '-')}`} 
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium hover:text-tedx-red transition-colors tracking-wide text-center w-full py-2 border-b border-white/10 last:border-0"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 w-full max-w-xs mx-auto">
            <Button onClick={() => setIsOpen(false)} className="w-full py-4 text-base font-bold tracking-wider uppercase shadow-xl shadow-tedx-red/20">
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
