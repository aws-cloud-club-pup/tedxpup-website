const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter"><span className="text-tedx-red">ABOUT</span> TEDxPUP</h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
          <p>
            This is the About section boilerplate. Replace this text with the mission statement, history, or purpose of the event.
          </p>
          <p>
            Add more context here about the "Uncovering the Unknown" theme or other relevant details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
