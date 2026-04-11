import ScrollReveal from "../ui/ScrollReveal";

const Partners = () => {

  const goldSponsors = [
    { name: "PUPianLifestyle", src: "/sponsors/gold/1-puplife.webp" },
    { name: "Reddit", src: "/sponsors/gold/2-reddit.webp" },
  ];

  const bronzeSponsors = [
    { name: "Browhaus", src: "/sponsors/bronze/1-browhaus.webp" },
    { name: "H-Vybe", src: "/sponsors/bronze/2-h-vybe.webp" },
    { name: "Strip", src: "/sponsors/bronze/3-strip.webp" },
  ];

  const supporters = [
    { name: "Astbury", src: "/sponsors/supporters/1-astbury.webp" },
    { name: "IndieCo", src: "/sponsors/supporters/2-indie-co.webp" },
    { name: "Manila TEDx", src: "/sponsors/supporters/3-manila-tedx.webp" },
  ];

  const mediaPartners = [
    { name: "Pop", src: "/partners/Pop_logo_2021.png" },
  ];

  const orgPartners = [
    { name: "AWSCCPUP", src: "/partners/AWSCCPUP.webp" },
  ];

  return (
    <section id="sponsors-partners" className="relative py-16 md:py-24 px-6 bg-black text-white overflow-hidden">
      {/* Background X */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <img src="/sponsors/x.webp" alt="" className="w-full h-full object-contain grayscale contrast-[1.8] brightness-[4] opacity-80" />
      </div>
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 container max-w-7xl mx-auto flex flex-col items-center text-center space-y-10 md:space-y-14">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            <span className="text-tedx-red">Sponsors</span> & Partners
          </h2>
        </ScrollReveal>

        {/* Gold Sponsors */}
        <div className="w-full space-y-4 md:space-y-6">
          <ScrollReveal className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Gold Sponsors</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {goldSponsors.map((sponsor, i) => (
              <ScrollReveal key={i} delay={`${i * 0.03}s`}>
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  loading="lazy"
                  decoding="async"
                  className={`${i != 0 ? 'h-[70px] md:h-[85px] lg:h-[100px]' : 'h-[50px] md:h-[65px] lg:h-[80px]'} object-contain hover:scale-110 transition-transform duration-300`}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="w-full space-y-4 md:space-y-6">
          <ScrollReveal className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Bronze Sponsors</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-10">
            {bronzeSponsors.map((sponsor, i) => (
              <ScrollReveal key={i} delay={`${i * 0.03}s`}>
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className="h-[70px] md:h-[85px] lg:h-[100px] object-contain hover:scale-110 transition-transform duration-300"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Supporters */}
        <div className="w-full space-y-4 md:space-y-6">
          <ScrollReveal className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Supporters</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
            {supporters.map((sponsor, i) => {
              // First logo: rounded-full, last logo: rounded-[30px] (oval) with w-[170px]
              return (
                <ScrollReveal key={i} delay={`${i * 0.03}s`}>
                  <img
                    src={sponsor.src}
                    alt={sponsor.name}
                    className={`h-[70px] md:h-[85px] lg:h-[100px] object-contain hover:scale-110 transition-transform duration-300`}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Media Partners */}
        <div className="w-full space-y-4 md:space-y-6">
          <ScrollReveal className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Media Partner</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
            {mediaPartners.map((sponsor, i) => {
              // First logo: rounded-full, last logo: rounded-[30px] (oval) with w-[170px]
              let width = '';
              let objectFit = 'object-contain';
              return (
                <ScrollReveal key={i} delay={`${i * 0.03}s`}>
                  <img
                    src={sponsor.src}
                    alt={sponsor.name}
                    className={`h-[70px] md:h-[85px] lg:h-[100px] ${width} ${objectFit} hover:scale-110 transition-transform duration-300`}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Organization Partners */}
        <div className="w-full space-y-4 md:space-y-6">
          <ScrollReveal className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <p className="relative px-4 md:px-6 bg-black text-base md:text-lg lg:text-xl font-medium tracking-wide text-gray-400 uppercase">Organization Partner</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
            {orgPartners.map((sponsor, i) => {
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
                <ScrollReveal key={i} delay={`${i * 0.05}s`}>
                  <img
                    src={sponsor.src}
                    alt={sponsor.name}
                    className={`h-[70px] md:h-[85px] lg:h-[100px] ${width} ${objectFit} hover:scale-110 transition-transform duration-300 ${borderRadius}`}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
