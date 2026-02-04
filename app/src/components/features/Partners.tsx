const Partners = () => {
  const platinumSponsors = [
    { name: "DevCon", src: "/sponsors/platinum/1-devcon.webp" },
    { name: "OSS", src: "/sponsors/platinum/2-oss.webp" },
    { name: "DepEd", src: "/sponsors/platinum/3-dep-logo.webp" },
    { name: "PWA", src: "/sponsors/platinum/4-pwa.webp" },
    { name: "WiTech", src: "/sponsors/platinum/5-witech.webp" },
  ];

  const goldSponsors = [
    { name: "PLMCSC", src: "/sponsors/gold/1-plmcsc.webp" },
    { name: "JPCS", src: "/sponsors/gold/2-jpcs.webp" },
    { name: "TPG", src: "/sponsors/gold/3-tpg-logo.webp" },
    { name: "Compile", src: "/sponsors/gold/4-compile-logo.webp" },
    { name: "ICpEP", src: "/sponsors/gold/5-icpep-logo.webp" },
  ];

  const silverSponsors = [
    { name: "Programmers Codeposting", src: "/sponsors/silver/1-programmers_codeposting.webp" },
    { name: "CpEoFit", src: "/sponsors/silver/2-cpeofit-logo.webp" },
    { name: "ICpEP PLM", src: "/sponsors/silver/3-icpep-plm.webp" },
    { name: "Embedded System PH", src: "/sponsors/silver/4-embedded_systemph.webp" },
  ];

  return (
    <section id="sponsors-partners" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Background X */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <img src="/sponsors/x.webp" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 md:space-y-24">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
          Our <span className="text-tedx-red">Sponsors</span>
        </h2>

        {/* Platinum Sponsors */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Platinum Sponsors</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {platinumSponsors.map((sponsor, i) => (
              <img 
                key={i} 
                src={sponsor.src} 
                alt={sponsor.name} 
                className={`h-[100px] md:h-[130px] lg:h-[150px] object-contain hover:scale-110 transition-transform duration-300 ${i >= 3 ? 'rounded-full' : ''}`} 
              />
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Gold Sponsors</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-10">
            {goldSponsors.map((sponsor, i) => (
              <img 
                key={i} 
                src={sponsor.src} 
                alt={sponsor.name} 
                className="h-[80px] md:h-[100px] lg:h-[120px] object-contain hover:scale-110 transition-transform duration-300" 
              />
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="w-full space-y-6 md:space-y-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Silver Sponsors</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
            {silverSponsors.map((sponsor, i) => {
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
