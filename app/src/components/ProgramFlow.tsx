const ProgramFlow = () => {
  return (
    <section id="program" className="py-24 px-6 bg-gray-950 text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center">PROGRAM <span className="text-tedx-red">FLOW</span></h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {['Opening Remarks', 'Keynote Speech 1', 'Intermission', 'Keynote Speech 2', 'Closing'].map((item, i) => (
            <div key={i} className="flex gap-8 p-6 border-b border-white/10 items-center hover:bg-white/5 transition-colors">
              <span className="text-tedx-red font-mono font-bold">0{i + 1}:00 PM</span>
              <span className="text-xl font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
