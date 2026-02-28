import { useState, useEffect } from "react";
// import Button from "../ui/Button";
import { FiClock, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

import heroBackground from "../../assets/hero/tedx-heart2.webp";
import tedxpupLogo from "../../assets/about/logos/tedxpup-white.webp";

import hero1 from "../../assets/hero/111.webp";
import hero2 from "../../assets/hero/222.webp";
import hero3 from "../../assets/hero/333.webp";
import hero4 from "../../assets/hero/444.webp";
import hero5 from "../../assets/hero/555.webp";

const SLIDES = [hero1, hero2, hero3, hero4, hero5];

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
      className="relative min-h-[100dvh] flex items-center justify-center px-6 bg-black overflow-hidden pt-16 pt:0"
    >
      {/* 1. Full Screen Slideshow (Background) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out transform grayscale-[100%] contrast-110 brightness-[0.8] blur-[0.8px] ${index === currentSlide
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
              }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-pink-600/5 mix-blend-screen" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Central Heart-X Image Graphic (Floating Background) */}
      <motion.div
        animate={{
          y: [0, -3, 0],
          scale: [1, 1.002, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none mix-blend-screen opacity-100"
      >
        <img
          src={heroBackground}
          alt="TEDx Heart Theme"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative w-full flex flex-col items-center z-10">
        <div className="max-w-4xl space-y-3 md:space-y-5 text-center relative">
          {/* Readability Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] md:w-[140%] md:h-[140%] bg-[radial-gradient(closest-side,rgba(0,0,0,0.8)_0%,transparent_100%)] pointer-events-none -z-10 blur-2xl" />

          <p className="text-gray-400 text-sm md:text-base font-medium italic animate-fade-in-up">
            The Polytechnic University of the Philippines–Manila joins the
            global stage
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 ml-0 sm:-ml-6">
            <motion.img
              src={tedxpupLogo}
              alt="TEDxPUP"
              className="h-20 md:h-40 w-auto"
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgba(236, 72, 153, 0))",
                  "drop-shadow(0 0 8px rgba(236, 72, 153, 0.25))",
                  "drop-shadow(0 0 0px rgba(236, 72, 153, 0))"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h1 className="text-5xl md:text-8xl font-black text-white -mt-3 md:mt-0 ml-0 md:-ml-6 relative">
              <span className="relative z-10">2026</span>
              {/* Subtle Red Shadow Pulse */}
              <motion.span
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 text-tedx-red blur-sm z-[-1]"
              >
                2026
              </motion.span>
            </h1>
          </div>

          <div className="space-y-1 md:space-y-2">
            <p className="text-xl md:text-3xl font-bold italic text-white drop-shadow-lg">
              Theme: <motion.span
                animate={{ color: ["#e62b1f", "#ff4d4d", "#e62b1f"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-tedx-red inline-block"
              >Love</motion.span> at First Idea
            </p>
            <p className="text-gray-200 text-lg md:text-xl font-medium italic drop-shadow-md">
              A TEDx event celebrating ideas that spark change.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 py-2 md:py-4 mt-4 md:mt-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0">
                <FiClock size={24} color="#e62b1f" />
              </span>
              <div className="text-left">
                <p className="text-lg md:text-xl text-white">
                  February 13, 2026
                </p>
                <p className="text-tedx-red text-sm">DATE</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0">
                <FiMapPin size={24} color="#e62b1f" />
              </span>
              <div className="text-left">
                <p className="text-lg md:text-xl text-white">
                  The Astbury, 2 Orion
                </p>
                <p className="text-tedx-red text-sm">MAKATI CITY</p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center gap-3 w-full">
            <Button
              href="https://ti.to/tedxpup/tedxpup2026"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              className="px-10 py-5 text-xl font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(230,43,31,0.6)] hover:shadow-[0_0_60px_rgba(230,43,31,0.8)] scale-[0.95] transition-all duration-300 bg-tedx-red border-none"
            >
              GET TICKETS
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
