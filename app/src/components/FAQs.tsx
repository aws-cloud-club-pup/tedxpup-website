const FAQs = () => {
  return (
    <section id="faqs" className="py-24 px-6 bg-black text-white border-t border-white/10">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter text-center">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[1, 2, 3].map((i) => (
            <details key={i} className="group bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium hover:bg-white/5 transition-colors list-none">
                <span>Frequently Asked Question #{i}?</span>
                <span className="transform group-open:rotate-180 transition-transform text-tedx-red text-xl">▼</span>
              </summary>
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                Answer content goes here. It provides detailed information to resolve the user's query effectively.
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
