import { useState } from "react";

const Location = () => {
  const [activeTab, setActiveTab] = useState("PITX");

  const ROUTES = [
    {
      id: "PITX",
      label: "From PITX",
      content: (
        <ol className="list-decimal list-inside space-y-2 pl-2 marker:text-tedx-red text-sm md:text-sm">
          <li>Board the EDSA Carousel Bus at Gate 10.</li>
          <li>Alight at Ayala Station.</li>
          <li>
            Walk to the terminal behind the Shell station (McKinley Rd. cor.
            EDSA).
          </li>
          <li>Ride a jeepney with the sign "Ayala-Pateros" or "Makati Ave".</li>
          <li>Alight at the corner of Makati Avenue and J.P. Rizal St.</li>
          <li>
            Walk into Orion Street. The Astbury is the matte black building near
            the corner.
          </li>
        </ol>
      ),
    },
    {
      id: "Cubao",
      label: "From Cubao",
      content: (
        <ol className="list-decimal list-inside space-y-2 pl-2 marker:text-tedx-red text-sm md:text-sm">
          <li>Ride the MRT-3 Southbound and alight at Guadalupe Station.</li>
          <li>
            Exit on the Northbound side and ride a jeepney signed "L. Guinto" or
            "Paco" (via J.P. Rizal).
          </li>
          <li>Alight at the corner of Makati Avenue and J.P. Rizal St.</li>
          <li>
            Walk into Orion Street. The Astbury is the matte black building near
            the corner.
          </li>
        </ol>
      ),
    },
    {
      id: "PUP",
      label: "From PUP",
      content: (
        <ol className="list-decimal list-inside space-y-2 pl-2 marker:text-tedx-red text-sm md:text-sm">
          <li>
            Ride the LRT-2 from Pureza Station to Araneta Center-Cubao Station.
          </li>
          <li>Transfer to MRT-3 Cubao Station.</li>
          <li>Ride the MRT-3 Southbound and alight at Guadalupe Station.</li>
          <li>Ride a jeepney signed "L. Guinto" or "Paco" (via J.P. Rizal).</li>
          <li>Alight at the corner of Makati Avenue and J.P. Rizal St.</li>
          <li>
            Walk into Orion Street. The Astbury is the matte black building near
            the corner.
          </li>
        </ol>
      ),
    },
    {
      id: "Details",
      label: "Details",
      content: (
        <ul className="list-disc list-inside space-y-2 pl-2 marker:text-tedx-red text-sm md:text-base">
          <li>
            <span className="font-bold text-white">GPS Search:</span> "The
            Astbury" or "2 Orion, Makati" (Waze/Google Maps).
          </li>
          <li>
            <span className="font-bold text-white">Street Position:</span>{" "}
            Located on Orion Street, situated between Makati Avenue and the
            Iglesia Ni Cristo (Lokal ng Bel-Air).
          </li>
          <li>
            <span className="font-bold text-white">Visual Identity:</span> A
            solid matte black building.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section
      id="location"
      className="py-24 px-6 bg-black text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-[800px] h-[800px] opacity-80 pointer-events-none select-none mix-blend-screen">
        <img
          src="/sponsors/x.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left space-y-8 font-light relative">
            {/* Title with stylized ampersand */}
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase relative z-10 font-outfit">
              {" "}
              <span className="text-tedx-red text-4xl md:text-5xl">Event</span>{" "}
              Location
            </h2>

            <div className="space-y-6 text-xl text-gray-300">
              <div>
                <span className="font-bold text-tedx-red">Venue: </span>
                <span>The Astbury, 2 Orion, Makati City</span>
              </div>

              <div>
                <span className="font-bold text-tedx-red">Address: </span>
                <span>2 Orion, Makati City</span>
              </div>

              <div className="space-y-4">
                <div className="font-bold text-tedx-red text-xl">
                  How to get there:
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {ROUTES.map((route) => (
                    <button
                      key={route.id}
                      onClick={() => setActiveTab(route.id)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                        activeTab === route.id
                          ? "bg-tedx-red text-white border-tedx-red shadow-[0_0_15px_rgba(230,43,30,0.4)]"
                          : "bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white"
                      }`}
                    >
                      <span>{route.label}</span>
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="min-h-[200px] transition-all duration-300">
                  {ROUTES.find((r) => r.id === activeTab)?.content}
                </div>
              </div>
            </div>
          </div>

          {/* Map Illustration */}
          <div className="lg:w-1/2 w-full flex justify-center items-center relative">
            <div className="relative w-full max-w-xl aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(230,43,31,0.2)] border-2 border-dotted border-tedx-red/50 bg-black/50 p-2 animate-fade-in-up">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=The+Astbury,+2+Orion,+Makati,+Metro+Manila&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                className="w-full h-full rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                title="The Astbury Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
