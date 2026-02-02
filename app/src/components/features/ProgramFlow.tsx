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
    <section id="program" className="py-24 px-6 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 tracking-tighter text-center">
          PROGRAM <span className="text-tedx-red">FLOW</span>
        </h2>
        <div className="space-y-2 max-w-5xl mx-auto">
          {programItems.map((item, i) => (
            <div
              key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
