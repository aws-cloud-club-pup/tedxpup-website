import Button from './Button';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 px-6 min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="z-10 container max-w-7xl text-center space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
          <span className="text-tedx-red inline-block hover:scale-105 transition-transform duration-500">HERO</span> 
          <span className="block text-white">SECTION</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
           Join the conversation at TEDxPUP. Uncovering the unknown, redefining the possible.
        </p>
        <div className="flex gap-4 justify-center mt-8">
           <Button variant="outline" className="px-8 py-3 font-medium tracking-wide">
             Learn More
           </Button>
           <Button variant="default" className="px-8 py-3 font-medium tracking-wide">
             Get Tickets
           </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
