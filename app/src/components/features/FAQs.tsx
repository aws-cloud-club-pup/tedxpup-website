import faqData, { type FAQ } from '../../data/faqs.ts';

const FAQs = () => {

  return (
    <section id="faqs" className="relative py-16 md:py-24 px-6 bg-black text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/faq/tedxpup_bglayer1.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.8] brightness-[1.1]"
          style={{ opacity: 0.85, mixBlendMode: "screen" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="relative z-10 container lg:flex justify-between gap-12 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 lg:mb-0 lg:w-2/5 shrink-0 uppercase">
          <em className="not-italic text-tedx-red font-bold">Frequently</em> <strong>Asked Questions</strong>
        </h1>
        <div className="w-full lg:w-3/5 space-y-4">
          {faqData.map((faq: FAQ, id: number) => (
            <details key={id} className="group border-b border-white/10 overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-5 text-base md:text-xl lg:text-2xl cursor-pointer hover:bg-white/5 transition-colors list-none">
                <span className="w-4/5 pr-4">{faq.question}</span>
                <span className="bg-white rounded-full p-0.5 transform group-open:rotate-45 transition-transform text-tedx-red text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </span>
              </summary>
              <div className="transition-all p-4 md:p-6 pt-0 text-sm md:text-base text-gray-400 leading-relaxed">
                {faq.answer}
                {faq.hasButton && (
                  <a 
                    href={faq.buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mt-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-tedx-red text-white font-medium rounded-lg hover:bg-tedx-red/90 transition-colors w-fit"
                  >
                    {faq.buttonText}
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
