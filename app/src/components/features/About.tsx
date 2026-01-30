import aboutAccent from "../../assets/about/about-accent.svg"
import aboutBlurSpotlight from "../../assets/about/blur-spotlight.svg"

const About = () => {

  return (
    <section id="about" className="relative px-6 bg-black text-white overflow-hidden">
      <div className="relative container py-24 pt-52 max-w-7xl mx-auto text-right">
        <h2 className="font-outfit text-2xl md:text-3xl mb-8 tracking-tighter">About <span className="text-4xl md:text-5xl"><em className="text-tedx-red not-italic">TEDx</em>PUP</span> 2025</h2>
        <div className="flex flex-col gap-4 md:items-end  text-lg leading-relaxed">
          <p className="md:w-1/2">
            TEDxPUP 2025 marks the very first TEDx event at the Polytechnic University of the Philippines. As a newly licensed TEDx initiative, it represents a bold step in bringing “ideas worth spreading” to our campus community and beyond. This debut event serves as a starting point for a tradition of dialogue, discovery, and innovation within PUP.
          </p>
          <p className="md:w-3/5">
            As a student-led effort, TEDxPUP aims to spotlight the voices of the Filipino youth alongside educators, artists, and leaders who are shaping our future. By creating this platform, we hope to inspire a culture of curiosity and collaboration, where new ideas can spark meaningful change.
          </p>
          <p className="md:w-2/3">
            By joining our first TEDx journey, you are becoming part of history — helping build a space at PUP where diverse perspectives can converge, challenge, and redefine what tomorrow can look like.
          </p>
        </div>

        {/* Background Assets */}
        <img className="absolute bottom-20 right-[46rem] hidden md:block" alt="" src={aboutBlurSpotlight}/>
        <img className="absolute bottom-0 invisible md:visible md:-left-48 xl:-left-10 h-full" alt="" src={aboutAccent} />
        <h1
          style={{ WebkitTextStrokeWidth: '1.29px', WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.25)' }}
          className="absolute top-20 -left-20 invisible md:visible rotate-90 text-9xl text-transparent font-roboto"
        >
          TED<sup>x</sup>
        </h1>
        <h1
          style={{ WebkitTextStrokeWidth: '2.14px', WebkitTextStrokeColor: 'rgba(252, 0, 0, 0.40)' }}
          className="absolute bottom-40 invisible xl:visible left-0 rotate-90 text-[13rem] text-transparent"
        >
          TED<sup>x</sup>
        </h1>
      </div>


    </section>
  );
};

export default About;
