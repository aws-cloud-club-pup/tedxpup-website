import ScrollReveal from "../ui/ScrollReveal";

const momentImages = Array.from({ length: 12 }, (_, index) => `/events/moment_${index + 1}.jpg`);

const Events = () => {
	const loopImages = [...momentImages, ...momentImages];

	return (
		<section id="events" className="relative py-24 px-6 bg-black text-white overflow-hidden">
			<div className="container max-w-7xl mx-auto space-y-14">
				<ScrollReveal>
					<h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center uppercase">
						Past <span className="text-tedx-red">Events</span>
					</h2>
				</ScrollReveal>

				<div className="space-y-5">
					<div className="space-y-3">
						<img
							src="/events/tedxlafi_logo.png"
							alt="TEDxPUP Love at First Idea"
							className="h-14 md:h-16 w-auto object-contain"
						/>
						<p className="text-base md:text-xl font-semibold text-gray-200">
							February 13, 2026 | The Astbury, 2 Orion, Makati City
						</p>
					</div>

					<div className="relative overflow-hidden rounded-xl">
						<div className="events-carousel-track flex gap-4 w-max">
							{loopImages.map((image, index) => (
								<div
									key={`${image}-${index}`}
									className="shrink-0 w-[calc((min(80rem,100vw-3rem)-3rem)/4)]"
								>
									<img
										src={image}
										alt={`TEDxPUP event moment ${((index % momentImages.length) + 1).toString()}`}
										className="w-full aspect-[4/3] object-cover rounded-lg border border-white/10"
										loading="lazy"
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="space-y-6">
					<h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">All Events</h3>

					<article className="group w-full max-w-[22rem] rounded-xl border border-white/15 bg-white/5 overflow-hidden hover:border-tedx-red/60 transition-colors">
						<div className="p-3">
							<div className="rounded-lg overflow-hidden">
								<img
									src="/events/event_poster.jpg"
									alt="Love at First Idea event poster"
									className="w-full h-36 object-cover object-[50%_25%] transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
						</div>

						<div className="p-3.5 space-y-1">
							<p className="text-[11px] text-gray-300 font-medium">
								2026-02-13 | 13:00 - 18:00 | The Astbury, 2 Orion, Makati City
							</p>
							<h4 className="text-[1.45rem] font-bold transition-colors group-hover:text-tedx-red">Love at First Idea</h4>
							<p className="text-[13px] text-gray-300 leading-relaxed">A TEDx event celebrating ideas that spark change.</p>
							<div className="pt-2 flex items-center justify-between">
								<a
									href="/#events"
									className="inline-flex text-[13px] text-white font-bold tracking-wide hover:text-tedx-red transition-colors"
								>
									View All Moments
								</a>
								<a
									href="/#events"
									aria-label="View all event moments"
									className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white border border-white/20 group-hover:bg-tedx-red group-hover:border-tedx-red group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(230,43,31,0.8)] transition-all"
								>
									<svg 
                                        viewBox="0 0 24 24" 
										width="14" 
										height="14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        aria-hidden="true" 
										className="transition-transform origin-center group-hover:rotate-45">
										<path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
							</div>
						</div>
					</article>
				</div>
			</div>

			<style>{`
				@keyframes events-scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.events-carousel-track {
					animation: events-scroll 70s linear infinite;
					will-change: transform;
				}
			`}</style>
		</section>
	);
};

export default Events;
