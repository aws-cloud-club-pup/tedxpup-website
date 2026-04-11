import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import tedxpupLogo from "../../assets/about/logos/tedxpup-white.webp";

import hero1 from "../../assets/hero/post_hero1.webp";
import hero2 from "../../assets/hero/post_hero2.webp";
import hero3 from "../../assets/hero/post_hero3.webp";
import hero4 from "../../assets/hero/post_hero4.webp";
import hero5 from "../../assets/hero/post_hero5.webp";
import hero6 from "../../assets/hero/post_hero6.webp";
import hero7 from "../../assets/hero/post_hero7.webp";

const SLIDES = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 bg-black overflow-hidden"
    >
      {/* Full Screen Slideshow (Background) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {SLIDES.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 2.5, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            <motion.div
              animate={
                index === currentSlide
                  ? { scale: 1.08 }
                  : { scale: 1.0 }
              }
              transition={{
                scale: { duration: 8, ease: "linear" },
              }}
              className="absolute inset-0 bg-cover bg-center grayscale contrast-110 brightness-[0.65]"
              style={{ backgroundImage: `url(${slide})`, contain: "strict" }}
            />
          </motion.div>
        ))}

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="w-full relative z-20 flex flex-col items-center justify-center text-center px-4 -mt-14 sm:-mt-16 md:-mt-20" style={{ isolation: "isolate" }}>

        {/* Readability radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.7)_0%,transparent_100%)] pointer-events-none blur-2xl" />

        {/* Tagline */}
        <p className="text-gray-300 text-sm md:text-base font-medium italic max-w-xs sm:max-w-sm md:max-w-none">
          The Polytechnic University of the Philippines–Manila joins the global stage
        </p>

        {/* Spacer */}
        <div className="h-3 sm:h-4 md:h-5" />

        {/* Welcome to */}
        <p className="text-white/75 text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-3 sm:mb-4">
          Welcome to
        </p>

        {/* TEDxPUP Logo */}
        <motion.img
          src={tedxpupLogo}
          alt="TEDxPUP"
          className="h-14 sm:h-20 md:h-28 w-auto object-contain"
          animate={{
            filter: [
              "drop-shadow(0 0 4px rgba(230, 43, 31, 0.15))",
              "drop-shadow(0 0 10px rgba(230, 43, 31, 0.3))",
              "drop-shadow(0 0 4px rgba(230, 43, 31, 0.15))",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ideas Worth Sharing */}
        <p className="text-white/65 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mt-3">
          Ideas Worth Spreading
        </p>
      </div>
    </section>
  );
};

export default Hero;
