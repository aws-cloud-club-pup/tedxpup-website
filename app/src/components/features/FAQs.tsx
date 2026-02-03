import faqData, { type FAQ } from '../../data/faqs.ts';

const FAQs = () => {

  return (
    <section id="faqs" className="py-24 px-6 bg-black text-white border-t border-white/10">
      <div className="container lg:flex justify-between max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium font-outfit mb-12 ">
          <em className="not-italic text-tedx-red font-bold">Frequently</em> <strong>Asked Questions</strong>
        </h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq: FAQ, id: number) => (
            <details key={id} className="max-w-3xl group border-b-2 border-white/10 overflow-hidden">
              <summary className="flex items-center justify-between p-6 text-2xl lg:text-3xl cursor-pointer hover:bg-white/5 transition-colors list-none">
                <span className="w-4/5">{faq.question}</span>
                <span className="bg-white rounded-full p-0.5 transform group-open:rotate-45 transition-transform text-tedx-red text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </span>
              </summary>
              <div className="transition-all p-6 pt-0 text-gray-400 leading-relaxed">
                {faq.answer}
                {faq.hasButton && (
                  <a 
                    href={faq.buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mt-4 px-6 py-3 bg-tedx-red text-white font-medium rounded-lg hover:bg-tedx-red/90 transition-colors w-fit"
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
