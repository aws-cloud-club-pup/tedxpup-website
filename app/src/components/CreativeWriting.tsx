const CreativeWriting = () => {
  return (
    <section id="creative-writing-entries" className="py-24 px-6 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter text-center">CREATIVE WRITING <span className="text-tedx-red">ENTRIES</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-gray-900/50 p-8 rounded-xl border border-white/10 hover:border-tedx-red/50 transition-colors">
                <h3 className="text-xl font-bold mb-4">Entry Title #{i}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="text-tedx-red font-medium text-sm hover:underline">Read More →</button>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWriting;
