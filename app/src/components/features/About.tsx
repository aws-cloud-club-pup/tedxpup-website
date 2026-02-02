import aboutBackground from "../../assets/about/ABOUT-BG-3.png"
import image1 from "../../assets/about/pylon.png"
import image2 from "../../assets/about/2.jpg"
import image3 from "../../assets/about/3.jpg"
import tedxpupLogo from "../../assets/about/logos/tedxpup-white.png"
import tedxLogo from "../../assets/about/logos/tedx.png"
import tedLogo from "../../assets/about/logos/ted.png"

const About = () => {

  return (
    <section id="about" className="relative px-6 bg-black text-white overflow-hidden">
      {/* Main Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-contain pointer-events-none opacity-40 grayscale"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />
      
      <div className="relative container py-8 pt-20 max-w-7xl mx-auto z-10">
        
        {/* Section 1: Image on right, text on left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6">
          <div className="order-first lg:order-first text-left lg:text-left space-y-3">
            <div className="flex items-center gap-0 -mb-5">
              <h2 className="font-outfit text-2xl md:text-3xl tracking-tighter"><strong>ABOUT</strong></h2>
              <img src={tedxpupLogo} alt="TEDxPUP" className="h-20 md:h-24 w-auto" />
            </div>
            <p className="text-lg leading-relaxed color">
              The Polytechnic University of the Philippines - Manila is ready to join this global movement of ideas worth spreading.
            </p>
            <p className="text-lg leading-relaxed">With our very first TEDxPUP, we aim to create a stage where innovation meets inspiration, showcasing voices from our university community and beyond.</p>
          </div>
          <div className="order-last lg:order-last">
            <img src={image1} alt="TEDxPUP" className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(230,43,31,0.6)] border-2 border-tedx-red/50" />
          </div>
        </div>

        {/* Section 2: Image on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6">
          <div className="order-last lg:order-first">
            <img src={image2} alt="TEDx" className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(230,43,31,0.6)] border-2 border-tedx-red/50" />
          </div>
          <div className="order-first lg:order-last text-left lg:text-right space-y-2">
            <div className="flex items-center gap-3 mb-3 lg:justify-end">
              <h2 className="font-outfit text-2xl md:text-3xl tracking-tighter"><strong>ABOUT</strong></h2>
              <img src={tedxLogo} alt="TEDx" className="h-8 md:h-10 w-auto" />
            </div>
            <p className="text-lg leading-relaxed">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
            </p>
          </div>
        </div>

        {/* Section 3: Image on right, text on left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="order-first lg:order-first text-left lg:text-left space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="font-outfit text-2xl md:text-3xl tracking-tighter"><strong>ABOUT</strong></h2>
              <img src={tedLogo} alt="TED" className="h-8 md:h-10 w-auto" />
            </div>
            <p className="text-lg leading-relaxed">
              TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
            </p>
          </div>
          <div className="order-last lg:order-last">
            <img src={image3} alt="TED" className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(230,43,31,0.6)] border-2 border-tedx-red/50" />
          </div>
        </div>

        
      </div>


    </section>
  );
};

export default About;
