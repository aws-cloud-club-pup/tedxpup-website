import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-tedx-red/20 to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tedx-red/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase font-outfit drop-shadow-xl">
          Ready to Spark <span className="text-tedx-red">Change?</span>
        </h2>

        <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
          Join us on{" "}
          <span className="text-white font-bold">February 13, 2026</span> at{" "}
          <span className="text-white font-bold">The Astbury</span> for an
          unforgettable day of ideas, inspiration, and connection.
        </p>

        <div className="pt-8">
          <Button
            href="https://ti.to/tedxpup/tedxpup2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 text-xl font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(230,43,31,0.6)] hover:shadow-[0_0_60px_rgba(230,43,31,0.8)] hover:scale-105 transition-all duration-300 bg-tedx-red border-none"
          >
            Secure Your Seat
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Limited seats available. Don't miss out!
        </p>
      </div>
    </section>
  );
};

export default CTA;
