// import Button from "../ui/Button";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-tedx-red/20 to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tedx-red/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase font-outfit drop-shadow-xl whitespace-nowrap">
          NO UPCOMING EVENTS<span className="text-tedx-red">…FOR NOW</span>
        </h2>

        <div className="space-y-4 px-4 w-full">
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
