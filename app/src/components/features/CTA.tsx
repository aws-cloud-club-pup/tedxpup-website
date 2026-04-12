// import Button from "../ui/Button";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/faq/tedxpup_bglayer3.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.9]"
          style={{ opacity: 0.68, mixBlendMode: "screen" }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase drop-shadow-xl lg:whitespace-nowrap leading-tight">
          NO UPCOMING EVENTS<br className="md:hidden" /><span className="text-tedx-red">…FOR NOW</span>
        </h2>

        <div className="space-y-4 px-4 w-full mt-4 md:mt-0">
          <p className="text-base md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            There are no events scheduled at the moment — but something exciting is always in the works.
          </p>
          <p className="text-base md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Stay connected and be the first to know what's coming next.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="pt-1 flex justify-center items-center gap-6">
          <a
            href="https://www.facebook.com/TEDxPUP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tedx-red transition-colors duration-300"
            aria-label="TEDxPUP Facebook"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/tedxpup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tedx-red transition-colors duration-300"
            aria-label="TEDxPUP Instagram"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.tiktok.com/@tedxpup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tedx-red transition-colors duration-300"
            aria-label="TEDxPUP TikTok"
          >
            <FaTiktok size={32} />
          </a>
        </div>

        {/* <div className="pt-8">
          <Button
            href="https://ti.to/tedxpup/tedxpup2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 text-xl font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(230,43,31,0.6)] hover:shadow-[0_0_60px_rgba(230,43,31,0.8)] scale-[0.95] transition-all duration-300 bg-tedx-red border-none"
          >
            Secure Your Seat
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Limited seats available. Don't miss out!
        </p> */}
      </div>
    </section>
  );
};

export default CTA;
