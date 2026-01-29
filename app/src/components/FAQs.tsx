const FAQs = () => {
  const faqData = [
    {
      question: 'Who may attend?',
      answer: 'TEDxPUP is open to students, faculty, alumni, and members of the public who register in advance. Priority may be given to PUP-affiliated applicants if seating is limited.'
    },
    {
      question: 'Will there be a participation fee?',
      answer: 'No. The event is free to attend, but registration is required — and seats are limited.'
    },
    {
      question: 'Will the talks be recorded and posted online?',
      answer: 'Yes. Selected talks will be uploaded to the TEDxPUP and TEDx YouTube channels after editorial review, following TEDx quality guidelines.'
    },
    {
      question: 'Are there opportunities to present student projects?',
      answer: 'Yes — there will be an exhibit area for student projects during the lunch break. Exhibitors must apply by October 15.'
    },
    {
      question: 'Can I bring guests?',
      answer: 'Each registrant may indicate up to 1 guest during registration, subject to availability.'
    },
  ]

  return (
    <section id="faqs" className="py-24 px-6 bg-black text-white border-t border-white/10">
      <div className="container lg:flex justify-between max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium font-outfit mb-12 "><em className="not-italic text-tedx-red">Frequently</em> Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, id) => (
            <details key={id} className="max-w-3xl group border-b-2 border-white/10 overflow-hidden">
              <summary className="flex items-center justify-between p-6 text-2xl lg:text-3xl cursor-pointer hover:bg-white/5 transition-colors list-none">
                <span className="w-4/5">{faq.question}</span>
                <span className="bg-white rounded-full p-0.5 transform group-open:rotate-45 transition-transform text-tedx-red text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </span>
              </summary>
              <div className="transition-all p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
