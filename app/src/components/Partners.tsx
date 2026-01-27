const Partners = () => {
  return (
    <section id="partners" className="py-24 px-6 bg-white text-black">
      <div className="container max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">OUR PARTNERS</h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">
              LOGO
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
