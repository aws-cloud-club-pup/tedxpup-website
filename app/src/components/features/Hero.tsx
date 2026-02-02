import Button from '../ui/Button';
import { FiClock, FiMapPin } from 'react-icons/fi';
import heroBackground from '../../assets/hero/TEDX-HEART.png';
import tedxpupLogo from '../../assets/about/logos/tedxpup-white.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-contain pointer-events-none opacity-40"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto max-w-7xl relative w-full flex flex-col items-center z-10">
        <div className="max-w-4xl space-y-5 text-center">
          <p className="text-gray-400 text-sm md:text-base font-medium italic">
            The Polytechnic University of the Philippines–Manila joins the global stage
          </p>
          
          <div className="flex items-center justify-center gap-0 -ml-4 md:-ml-10">
            <img src={tedxpupLogo} alt="TEDxPUP" className="h-24 md:h-40 w-auto" />
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none text-white -ml-4 md:-ml-6">
              2026
            </h1>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-extrabold italic">Theme: Love at First Idea</p>
            <p className="text-gray-300 text-lg md:text-xl font-semibold italic">A TEDx event celebrating ideas that spark change.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto py-4">
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <FiClock className="text-[#e62b1f] w-6 h-6 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="font-extrabold text-xl text-white">February 13, 2026</p>
                <p className="text-[#e62b1f] text-sm">Date</p>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <FiMapPin className="text-[#e62b1f] w-6 h-6 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="font-extrabold text-xl text-white whitespace-nowrap">The Astbury, 2 Orion, Makati City</p>
                <p className="text-[#e62b1f] text-sm">Location</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <Button variant="default" className="px-10 py-3 text-lg font-bold uppercase tracking-wider">
              GET TICKETS
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
