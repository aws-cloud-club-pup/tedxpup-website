

const FAQs = () => {
  const faqData: FAQ[] = [
    {
      question: 'Where can I get updates or ask questions?',
      answer: 'You may join our official subreddit: r/BosesNgPUP.\n\nThis subreddit serves as our central community hub, where you can ask questions, raise concerns, and interact with the organizing team before, during, and after the event.',
      hasButton: true,
      buttonText: 'Visit r/BosesNgPUP',
      buttonLink: 'https://www.reddit.com/r/BosesNgPUP/',
    },
    {
      question: 'Who can attend TEDxPUP?',
      answer: 'TEDxPUP is open to students, faculty members, alumni, and invited guests. Attendance may be limited due to venue capacity, so registration and confirmation are required.'
    },
    {
      question: 'Is TEDxPUP free to attend?',
      answer: 'Yes. TEDxPUP is free to attend.'
    },
    {
      question: 'Can a non-PUPian attend the event?',
      answer: 'Yes. Non-PUPians are welcome to attend, subject to registration approval and seat availability.'
    },
    {
      question: 'How can I register for the event?',
      answer: 'Registration details will be announced through our official website and social media channels. Participants may be required to complete an online registration form and comply with specific event guidelines.'
    },
    {
      question: 'Can I become a speaker at TEDxPUP?',
      answer: (
        <>
          Speaker selection follows a curated and application-based process in line with TEDx guidelines.<br /><br />
          For TEDxPUP 2026, the speaker lineup has already been finalized, and we are unable to accommodate additional speakers for this event cycle.
        </>
      ),
    },
    {
      question: 'Can partners or sponsors also be speakers?',
      answer: 'No. In accordance with TEDx guidelines, there is a clear distinction between partners/sponsors and speakers. These roles cannot coexist to ensure that all talks remain non-promotional and idea-focused.'
    },
    {
      question: 'Is TEDxPUP affiliated with TED??',
      answer: 'TEDxPUP is an independently organized TEDx event, officially licensed by TED. While it adheres to TEDx rules and standards, it is planned and executed by a local organizing team.'
    },
    {
      question: 'What should I bring on the day of the event?',
      answer: 'Registered participants are advised to bring a valid ID and their registration confirmation (digital or printed). Additional reminders and instructions will be sent prior to the event.'
    },
    {
      question: 'Is the event recorded or livestreamed?',
      answer: 'The event will not be livestreamed. However, the talks will be recorded and published on the official TEDx YouTube channel after the event.'
    },
    {
      question: 'Can I transfer my slot to someone else?',
      answer: 'Slot transfers may be subject to approval. Please follow official announcements or contact the organizing team through our official platforms for guidance.'
    },
    {
      question: 'Are walk-ins allowed?',
      answer: 'No. Walk-in attendees are not allowed. Only participants with confirmed registration will be admitted due to venue capacity and event guidelines.'
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </span>
              </summary>
              <div className="transition-all p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
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
