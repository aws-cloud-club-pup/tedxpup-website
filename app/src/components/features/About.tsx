import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import aboutBackground from "../../assets/hero/444.webp";
import image1 from "../../assets/about/pylon.webp";
import image2 from "../../assets/hero/555.webp";
import image3 from "../../assets/hero/333.webp";

import tedxpupLogo from "../../assets/about/logos/tedxpup-white.webp";
import tedxLogo from "../../assets/about/logos/tedx.webp";
import tedLogo from "../../assets/about/logos/ted.webp";

const slides = [
  {
    id: 0,
    image: image1,
    header: (
      <div className="flex items-center gap-0 -mb-5">
        <h2 className="font-outfit text-2xl md:text-3xl tracking-tighter">
          <strong>ABOUT</strong>
        </h2>
        <img src={tedxpupLogo} alt="TEDxPUP" className="h-16 md:h-20 w-auto" />
      </div>
    ),
    content: (
      <>
        <p className="text-lg leading-relaxed color mb-4">
          The Polytechnic University of the Philippines - Manila is ready to
          join this global movement of ideas worth spreading.
        </p>
        <p className="text-lg leading-relaxed">
          With our very first TEDxPUP, we aim to create a stage where innovation
          meets inspiration, showcasing voices from our university community and
          beyond.
        </p>
      </>
    ),
    layout: "text-left", // Standardizing for simplicity or could alternate
  },
  {
    id: 1,
    image: image2,
    header: (
      <div className="flex items-center gap-3 mb-3">
        <h2 className="font-outfit text-2xl md:text-3xl tracking-tighter">
          <strong>ABOUT</strong>
        </h2>
        <img src={tedxLogo} alt="TEDx" className="h-8 md:h-10 w-auto" />
      </div>
    ),
    content: (
      <p className="text-lg leading-relaxed">
        In the spirit of ideas worth spreading, TEDx is a program of local,
        self-organized events that bring people together to share a TED-like
        experience. At a TEDx event, TED Talks video and live speakers combine
        to spark deep discussion and connection. These local, self-organized
        events are branded TEDx, where x = independently organized TED event.
        The TED Conference provides general guidance for the TEDx program, but
        individual TEDx events are self-organized. (Subject to certain rules and
        regulations.)
      </p>
    ),
    layout: "text-right",
  },
  {
    id: 2,
    image: image3,
    header: (
      <div className="flex items-center gap-3 mb-3">
        <h2 className="font-outfit text-2xl md:text-3xl tracking-tighter">
          <strong>ABOUT</strong>
        </h2>
        <img src={tedLogo} alt="TED" className="h-8 md:h-10 w-auto" />
      </div>
    ),
    content: (
      <p className="text-lg leading-relaxed">
        TED is a nonprofit, nonpartisan organization dedicated to discovering,
        debating and spreading ideas that spark conversation, deepen
        understanding and drive meaningful change. Our organization is devoted
        to curiosity, reason, wonder and the pursuit of knowledge — without an
        agenda. We welcome people from every discipline and culture who seek a
        deeper understanding of the world and connection with others, and we
        invite everyone to engage with ideas and activate them in your
        community.
      </p>
    ),
    layout: "text-left",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nextSlide = () => setActiveTab((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveTab((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="about"
      className="relative px-6 bg-black text-white overflow-hidden py-24"
    >
      {/* Main Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover pointer-events-none opacity-40 grayscale"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />

      <div className="relative container max-w-7xl mx-auto z-10 w-full">
        {/* MOBILE LAYOUT: Vertical Stack (Better UX - No scrolling up needed) */}
        <div className="flex flex-col gap-24 lg:hidden pb-12">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col gap-8 animate-fade-in-up"
            >
              {/* Header */}
              <div>{slide.header}</div>

              {/* Image */}
              <img
                src={slide.image}
                alt="About Image"
                className="w-full h-auto rounded-2xl border border-tedx-red shadow-[0_0_30px_rgba(255,45,45,0.5)] transition-all duration-300"
              />

              {/* Content */}
              <div className="text-gray-200 text-lg leading-relaxed">
                {slide.content}
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT: Interactive Carousel */}
        <div className="hidden lg:block">
          {/* CSS Grid Stack Container for Smooth Height Handling */}
          <div className="grid grid-cols-1 grid-rows-1 relative min-h-[400px] overflow-hidden">
            {slides.map((slide, index) => {
              // Determine position relative to active tab for sliding effect
              let position = "translate-x-full opacity-0 pointer-events-none"; // Default: Right (Future)
              if (index === activeTab) {
                position = "translate-x-0 opacity-100 pointer-events-auto z-20"; // Center (Active)
              } else if (index < activeTab) {
                position = "-translate-x-full opacity-0 pointer-events-none"; // Left (Past)
              }

              return (
                <div
                  key={slide.id}
                  className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-700 ease-in-out transform ${position}`}
                >
                  {/* Image Side */}
                  <div
                    className={`order-2 ${index === 1 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <img
                      src={slide.image}
                      alt="About Image"
                      className="w-full h-auto rounded-2xl border border-tedx-red shadow-[0_0_30px_rgba(255,45,45,0.5)] transition-all duration-300"
                    />
                  </div>

                  {/* Text Side */}
                  <div
                    className={`order-1 ${index === 1 ? "lg:order-2 lg:text-right" : "lg:order-1 lg:text-left"} space-y-4`}
                  >
                    <div
                      className={`flex ${index === 1 ? "lg:justify-end" : "justify-start"}`}
                    >
                      {slide.header}
                    </div>
                    <div className="text-gray-200">{slide.content}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-12 mt-8 md:mt-0">
            {/* Dots */}
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${activeTab === i
                      ? "w-12 bg-tedx-red shadow-glow"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-4 rounded-full border border-white/10 hover:border-tedx-red/50 hover:bg-white/5 transition-all text-white hover:text-tedx-red"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 rounded-full border border-white/10 hover:border-tedx-red/50 hover:bg-white/5 transition-all text-white hover:text-tedx-red"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
