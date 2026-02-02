import location from "../../assets/location/map.webp";

const Location = () => {
  return (
    <section id="location" className="py-24 px-6 bg-black text-white border-t border-white/10 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-left space-y-8 font-light relative">
            {/* Title with stylized ampersand */}
            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase font-outfit relative z-10">
              Location <span className="text-tedx-red text-4xl md:text-6xl align-middle">&</span> Logistics
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <div>
                <span className="font-bold text-tedx-red">Venue: </span>
                <span>The Astbury, 2 Orion, Makati City</span>
              </div>
              
              <div>
                <span className="font-bold text-tedx-red">Address: </span>
                <span>2 Orion, Makati City</span>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-tedx-red">How to get there:</div>
                <ul className="list-disc list-inside space-y-1 pl-2 marker:text-tedx-red">
                  <li>
                    <span className="font-bold text-white">LRT-2: </span>
                    <span>Get off at Pureza station &rarr; 10-15 min walk / tricycle.</span>
                  </li>
                  <li>
                    <span className="font-bold text-white">Jeepneys & Buses: </span>
                    <span>Routes along Aurora Blvd. and Lacson Ave stop within 5-10 minutes.</span>
                  </li>
                  <li>
                    <span className="font-bold text-white">Parking: </span>
                    <span>Limited campus parking; attendees are encouraged to use public transit.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Illustration */}
          <div className="lg:w-1/2 w-full flex justify-center items-center relative">
             <div className="relative w-full max-w-md aspect-[3/4]">
                <div className="w-full h-full border-2 border-dashed border-tedx-red/30 rounded-2xl flex items-center justify-center p-8 text-center bg-black/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <img src={location} alt="Location" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(230,43,30,0.3)]" />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
