import ScrollReveal from "../ui/ScrollReveal";

const ProgramFlow = () => {
  const programItems = [
    {
      time: "1:00 PM - 1:30 PM",
      duration: "30 min",
      title: "Audience Arrival & Check in",
    },
    { time: "1:30 PM - 1:40 PM", duration: "10 min", title: "Announcement" },
    {
      time: "1:40 PM - 1:45 PM",
      duration: "5 min",
      title: "Host Introductory Spiel",
    },
    { time: "1:45 PM - 1:50 PM", duration: "5 min", title: "Opening Remarks" },
    {
      time: "1:50 PM - 1:55 PM",
      duration: "5 min",
      title: "Acknowledgement of Sponsors",
    },
    { time: "1:55 PM - 2:05 PM", duration: "10 min", title: "Icebreaker" },
    {
      time: "2:05 PM - 2:10 PM",
      duration: "5 min",
      title: "TEDx & TEDxPUP Introductory Video",
    },
    { time: "2:10 PM - 3:00 PM", duration: "50 min", title: "TALK SESSIONS 1" },
    {
      time: "3:00 PM - 3:05 PM",
      duration: "5 min",
      title: "Audience Engagement",
    },
    { time: "3:05 PM - 3:10 PM", duration: "5 min", title: "Short Break" },
    { time: "3:10 PM - 4:00 PM", duration: "50 min", title: "TALK SESSIONS 2" },
    {
      time: "4:00 PM - 4:20 PM",
      duration: "20 min",
      title: "Break/Networking",
    },
    { time: "4:20 PM - 4:25 PM", duration: "5 min", title: "Performer 2" },
    { time: "4:25 PM - 5:15 PM", duration: "50 min", title: "TALK SESSIONS 3" },
    {
      time: "5:15 PM - 5:20 PM",
      duration: "5 min",
      title: "Audience Engagement",
    },
    {
      time: "5:20 PM - 5:25 PM",
      duration: "5 min",
      title: "Sponsors & Partners Benefits",
    },
    { time: "5:25 PM - 5:30 PM", duration: "5 min", title: "Closing Remarks" },
    { time: "5:30 PM - 5:35 PM", duration: "5 min", title: "Photo Op" },
    {
      time: "5:35 PM - 6:00 PM",
      duration: "25 min",
      title: "Volunteers Wrap Up",
    },
  ];

  return (

    <section id="program" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Minimal Gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(230,43,31,0.15)_0%,_rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(230,43,31,0.15)_0%,_rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none mix-blend-screen" />

      {/* Background X */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-20">
        <img src="/sponsors/x.webp" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center">
            PROGRAM <span className="text-tedx-red"></span>
          </h2>
        </ScrollReveal>
        <div className="space-y-2 max-w-5xl mx-auto">
          {programItems.map((item, i) => (
            <ScrollReveal key={i} delay={`${i * 0.01}s`}>
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 md:gap-8 p-4 md:p-6 border-b border-white/10 hover:bg-white/5 transition-colors text-center"
              >
                <div className="flex gap-3 items-center justify-center sm:justify-end sm:w-60 sm:flex-shrink-0">
                  <span className="text-tedx-red font-bold text-sm md:text-base whitespace-nowrap">
                    {item.time}
                  </span>
                  <span className="text-white/50 text-xs md:text-sm whitespace-nowrap">
                    ({item.duration})
                  </span>
                </div>
                <span className="text-base md:text-lg lg:text-xl font-semibold sm:text-left leading-relaxed sm:w-80">
                  {item.title}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
