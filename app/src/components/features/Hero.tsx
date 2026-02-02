import Button from '../ui/Button';
import { FiClock, FiMapPin } from 'react-icons/fi';
import xOverlay from '../../assets/about/x.svg';

const Hero = () => {
    return (
        <div className="relative bg-black text-white font-sans overflow-hidden">
            
            {/* Unified Background X Effect */}
            <div className="absolute top-0 right-0 h-full w-full pointer-events-none z-0 overflow-hidden">
                <img 
                    src={xOverlay} 
                    alt="X Overlay" 
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-auto max-w-none object-contain opacity-100 mix-blend-normal" 
                />
            </div>

            {/* --- HERO SECTION --- */}
            <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20 z-10">
                
                <div className="container mx-auto max-w-7xl relative w-full mb-20">
                    <div className="max-w-4xl space-y-8">
                        <p className="text-gray-400 text-sm md:text-base font-medium italic">
                            The Polytechnic University of the Philippines–Manila joins the global stage
                        </p>
                        
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                            <span className="text-[#e62b1f]">TEDx</span> PUP 2026
                        </h1>
                        
                        <div className="space-y-4">
                            <p className="text-2xl font-bold italic">Theme: Love at First Idea</p>
                            <p className="text-gray-300 text-lg">A TEDx event celebrating ideas that spark change.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl py-4">
                            <div className="flex items-start gap-4">
                                <FiClock className="text-[#e62b1f] w-6 h-6 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-xl text-white">February 13, 2026</p>
                                    <p className="text-gray-500 text-sm">Date</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-[#e62b1f] w-6 h-6 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-xl text-white whitespace-nowrap">The Astbury, 2 Orion, Makati City</p>
                                    <p className="text-gray-500 text-sm">Location</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 pt-4">
                            <Button variant="default" className="bg-[#e62b1f] hover:bg-red-700 text-white px-10 py-3 text-lg font-bold uppercase tracking-wider rounded-sm transition-colors">
                                GET TICKETS
                            </Button>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className="relative min-h-screen flex items-center px-6 py-20 bg-transparent z-10">

                 <div className="container mx-auto max-w-7xl relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                     {/* Left: About Us */}
                     <div className="lg:col-span-5 space-y-8 lg:-translate-y-20">
                        <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg max-w-sm">
                             <p>
                                <strong className="text-[#e62b1f]">TEDxPUP</strong> is organized by the students of the Polytechnic University of the Philippines–Manila, uniting curious and creative minds from the university and beyond.
                             </p>
                             <p>
                                Through talks and events, we celebrate ideas that ignite change, expand horizons, and connect people to shape a better world.
                             </p>
                        </div>
                     </div>

                     {/* Right: About TEDx / TED */}
                     <div className="lg:col-span-7 flex flex-col items-end text-right space-y-24 translate-y-20">
                         
                         <div className="space-y-6 max-w-lg">
                             <div className="flex flex-col items-end">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    About <span className="text-[#e62b1f] ml-1">TEDx</span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                                    x = independently organized event
                                </h3>
                             </div>
                             
                             <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
                            </p>
                         </div>

                         <div className="space-y-6 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">About <span className="text-[#e62b1f]">TED</span></h2>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                            </p>
                         </div>
                     </div>
                 </div>
            </section>
        </div>
    );
};

export default Hero;