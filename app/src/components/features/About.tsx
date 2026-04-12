import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import aboutBackground from "../../assets/hero/post_hero7.webp";
import image1 from "../../assets/hero/post_hero7.webp";
import image2 from "../../assets/hero/post_hero4.webp";
import image3 from "../../assets/hero/post_hero6.webp";

import tedxpupLogo from "../../assets/about/logos/tedxpup-white.webp";
import tedxLogo from "../../assets/about/logos/tedx.webp";
import tedLogo from "../../assets/about/logos/ted.webp";

import ScrollReveal from "../ui/ScrollReveal";

const slides = [
  {
    id: 0,
    logo: tedxpupLogo,
    logoAlt: "TEDxPUP",
    image: image1,
    content:
      "The Polytechnic University of the Philippines - Manila is ready to join this global movement of ideas worth spreading. With our very first TEDxPUP, we aim to create a stage where innovation meets inspiration, showcasing voices from our university community and beyond.",
  },
  {
    id: 1,
    logo: tedxLogo,
    logoAlt: "TEDx",
    image: image2,
    content:
      "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)",
  },
  {
    id: 2,
    logo: tedLogo,
    logoAlt: "TED",
    image: image3,
    content:
      "TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.",
  },
];

const About = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const next = () => goTo((active + 1) % slides.length);
  const prev = () => goTo((active - 1 + slides.length) % slides.length);

  return (
    <motion.section
      id="about"
      layout
      className="relative bg-black text-white overflow-hidden pt-[72px] pb-16 md:pt-[72px] md:pb-24 px-6 scroll-mt-16 lg:scroll-mt-20"
      transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover pointer-events-none opacity-[0.14] grayscale"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />

      <ScrollReveal>
        <div className="relative container max-w-7xl mx-auto z-10">

          {/* Grid: image left, text right on desktop — stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={slides[active].image}
                  alt={slides[active].logoAlt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.35, ease: "easeIn" as const } }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
              <div className="absolute inset-0 rounded-2xl border-2 border-tedx-red shadow-[0_0_40px_rgba(230,43,31,0.15)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Text */}
            <motion.div layout transition={{ layout: { duration: 0.5, ease: "easeInOut" } }} className="flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } }}
                  exit={{ opacity: 0, x: direction > 0 ? -30 : 30, transition: { duration: 0.3, ease: "easeIn" as const } }}
                  className="space-y-4"
                >
                  {/* About + Logo */}
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase">About</h2>
                    <img
                      src={slides[active].logo}
                      alt={slides[active].logoAlt}
                      className="h-7 sm:h-8 md:h-10 w-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Body */}
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {slides[active].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-between mt-6 md:mt-8">
                {/* Dots */}
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-[2px] rounded-full transition-all duration-400 ${
                        i === active ? "w-8 bg-tedx-red" : "w-3 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full border border-white/10 hover:border-tedx-red/50 hover:bg-white/5 transition-all text-white hover:text-tedx-red"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-full border border-white/10 hover:border-tedx-red/50 hover:bg-white/5 transition-all text-white hover:text-tedx-red"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </ScrollReveal>
    </motion.section>
  );
};

export default About;
