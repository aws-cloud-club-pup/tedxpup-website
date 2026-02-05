const Partners = () => {

  const goldSponsors = [
    { name: "PUPianLifestyle", src: "/sponsors/gold/1-puplife.jpg" },
    { name: "Reddit", src: "/sponsors/gold/2-reddit.png" },
  ];

  const bronzeSponsors = [
    { name: "Browhaus", src: "/sponsors/bronze/1-browhaus.png" },
    { name: "H-Vybe", src: "/sponsors/bronze/2-h-vybe.png" },
    { name: "Strip", src: "/sponsors/bronze/3-strip.jpg" },
  ];

  const supporters = [
    { name: "Astbury", src: "/sponsors/supporters/1-astbury.png" },
    { name: "IndieCo", src: "/sponsors/supporters/2-indie-co.jpeg" },
    { name: "Manila TEDx", src: "/sponsors/supporters/3-manila-tedx.jpeg" },
  ];

  const partners = [
    { name: "AWSCCPUP", src: "/partners/AWSCCPUP.png" },
  ];

  return (
    <section id="partners" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Background X */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <img src="/sponsors/x.webp" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 md:space-y-24">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Our <span className="text-tedx-red">Sponsors</span>
        </h2>

        {/* Gold Sponsors */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Gold Sponsors</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {goldSponsors.map((sponsor, i) => (
              <img
                key={i}
                src={sponsor.src}
                alt={sponsor.name}
                className={`${i != 0 ? 'h-[70px] md:h-[85px] lg:h-[100px]' : 'h-[50px] md:h-[65px] lg:h-[80px]'} object-contain hover:scale-110 transition-transform duration-300`}
              />
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Bronze Sponsors</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-10">
            {bronzeSponsors.map((sponsor, i) => (
              <img
                key={i}
                src={sponsor.src}
                alt={sponsor.name}
                className="h-[70px] md:h-[85px] lg:h-[100px] object-contain hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Supporters */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Supporters</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
            {supporters.map((sponsor, i) => {
              // First logo: rounded-full, last logo: rounded-[30px] (oval) with w-[170px]
              return (
                <img
                  key={i}
                  src={sponsor.src}
                  alt={sponsor.name}
                  className={`h-[70px] md:h-[85px] lg:h-[100px] object-contain hover:scale-110 transition-transform duration-300`}
                />
              );
            })}
          </div>
        </div>

        {/* Partners */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Organization Partner</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
            {partners.map((sponsor, i) => {
              // First logo: rounded-full, last logo: rounded-[30px] (oval) with w-[170px]
              let borderRadius = '';
              let width = '';
              let objectFit = 'object-contain';
              if (i === 0) borderRadius = 'rounded-full';
              else if (i === 3) {
                borderRadius = 'rounded-[30px]';
                width = 'w-[140px] md:w-[160px] lg:w-[170px]';
                objectFit = 'object-cover';
              }
              return (
                <img
                  key={i}
                  src={sponsor.src}
                  alt={sponsor.name}
                  className={`h-[70px] md:h-[85px] lg:h-[100px] ${width} ${objectFit} hover:scale-110 transition-transform duration-300 ${borderRadius}`}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
