import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

const momentImages = Array.from({ length: 12 }, (_, index) => `/events/moment_${index + 1}.webp`);

const Events = () => {
	const loopImages = [...momentImages, ...momentImages];
	const [focusedCard, setFocusedCard] = useState<string | null>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const cardRatiosRef = useRef<Map<string, number>>(new Map());

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const cardId = entry.target.getAttribute('data-event-id');
					if (cardId) {
						if (entry.isIntersecting) {
							cardRatiosRef.current.set(cardId, entry.intersectionRatio);
						} else {
							cardRatiosRef.current.delete(cardId);
						}
					}
				});

				let maxRatio = 0;
				let maxCardId: string | null = null;
				cardRatiosRef.current.forEach((ratio, cardId) => {
					if (ratio > maxRatio) {
						maxRatio = ratio;
						maxCardId = cardId;
					}
				});

				if (maxRatio > 0.5) {
					setFocusedCard(maxCardId);
				} else {
					setFocusedCard(null);
				}
			},
			{
				threshold: Array.from({ length: 101 }, (_, i) => i / 100),
				rootMargin: '-10% 0px -10% 0px'
			}
		);

		const cards = document.querySelectorAll('[data-event-id]');
		cards.forEach((card) => {
			if (observerRef.current) observerRef.current.observe(card);
		});

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, []);

	return (
		<section id="events" className="relative py-16 md:py-24 px-6 bg-black text-white overflow-hidden">

			{/* Background layers */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center grayscale contrast-[1.8] brightness-[1.1]"
					style={{ backgroundImage: "url('/events/tedxpup_bg4.webp')", opacity: 0.55 }}
				/>
				<img
					src="/events/tedxpup_bglayer4.webp"
					alt=""
					aria-hidden="true"
					className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.8] brightness-[1.1]"
					style={{ opacity: 0.45, mixBlendMode: "screen", imageRendering: "auto" }}
				/>
				<div className="absolute inset-0 bg-black/50" />
				<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
				<div className="events-grain absolute inset-0" />
			</div>

			<div className="relative container max-w-7xl mx-auto space-y-8 md:space-y-10 z-10">

				{/* Header */}
				<ScrollReveal>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-center">
						<span className="text-tedx-red">EVE</span>NTS
					</h2>
				</ScrollReveal>

				{/* Featured event label */}
				<ScrollReveal>
					<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-6 border-b border-white/20">
						<img
							src="/events/tedxlafi_logo.webp"
							alt="TEDxPUP Love at First Idea"
							className="h-10 w-auto object-contain"
						/>
						<p className="text-gray-400 text-sm">
							February 13, 2026 · The Astbury, 2 Orion, Makati City
						</p>
					</div>
				</ScrollReveal>

				{/* Scrolling photo strip */}
				<ScrollReveal>
					<div className="relative overflow-hidden rounded-xl">
						<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
						<div className="events-carousel-track flex gap-3 w-max">
							{loopImages.map((image, index) => (
								<div key={`${image}-${index}`} className="shrink-0 w-[160px] sm:w-[200px] md:w-[260px]">
									<img
										src={image}
										alt={`Moment ${((index % momentImages.length) + 1).toString()}`}
										className="w-full aspect-[4/3] object-cover rounded-lg"
										loading="lazy"
									/>
								</div>
							))}
						</div>
					</div>
				</ScrollReveal>

				{/* All events */}
				<ScrollReveal>
					<div className="space-y-5">
						<h3 className="text-sm uppercase tracking-widest text-gray-400 font-medium">All Events</h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
							<article
								data-event-id="love-at-first-idea"
								className={`group relative p-3 rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-500 ease-in-out hover:bg-black hover:border-tedx-red hover:shadow-[0_0_30px_rgba(255,45,45,0.5)] ${
									focusedCard === 'love-at-first-idea'
										? 'border-tedx-red shadow-[0_0_30px_rgba(255,45,45,0.5)] md:border-white/10 md:shadow-none md:hover:border-tedx-red md:hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]'
										: 'border-white/10 md:hover:border-tedx-red md:hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]'
								}`}
							>
								<div className="flex flex-col gap-4">
									<div className="overflow-hidden rounded-xl h-48">
										<img
											src="/events/event_poster.webp"
											alt="Love at First Idea"
											className={`w-full h-full object-cover object-[50%_25%] transition-all duration-500 ${
												focusedCard === 'love-at-first-idea'
													? 'scale-105 md:scale-100 md:group-hover:scale-105'
													: 'md:group-hover:scale-105'
											}`}
										/>
									</div>
									<div className="px-2 pb-2 space-y-2">
										<h4 className={`text-lg sm:text-xl font-bold leading-snug transition-colors duration-300 ${
											focusedCard === 'love-at-first-idea' ? 'text-tedx-red md:text-white md:group-hover:text-tedx-red' : 'group-hover:text-tedx-red'
										}`}>
											Love at First Idea
										</h4>
										<p className="text-gray-400 text-xs">Feb 13, 2026 · The Astbury, Makati City</p>
										<div className="pt-2 flex items-center justify-between">
											<a
												href="https://www.facebook.com/share/p/1CYABd13f7/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm font-semibold text-white tracking-widest uppercase group-hover:text-tedx-red transition-colors"
											>
												View Post
											</a>
											<a
												href="https://www.facebook.com/share/p/1CYABd13f7/"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="View Facebook post"
												className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-white border transition-all ${
													focusedCard === 'love-at-first-idea'
														? 'bg-tedx-red border-tedx-red shadow-[0_0_16px_rgba(230,43,31,0.7)] scale-105 md:bg-black md:border-white/20 md:shadow-none md:scale-100 md:group-hover:bg-tedx-red md:group-hover:border-tedx-red md:group-hover:scale-105 md:group-hover:shadow-[0_0_16px_rgba(230,43,31,0.7)]'
														: 'bg-black border-white/20 group-hover:bg-tedx-red group-hover:border-tedx-red group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(230,43,31,0.7)]'
												}`}
											>
												<svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true" className="transition-transform origin-center group-hover:rotate-45">
													<path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</ScrollReveal>

			</div>

			<style>{`
				@keyframes events-scroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.events-carousel-track {
					animation: events-scroll 70s linear infinite;
					will-change: transform;
				}
				.events-grain::after {
					content: '';
					position: absolute;
					inset: 0;
					background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
					opacity: 0.06;
					mix-blend-mode: overlay;
					pointer-events: none;
				}
			`}</style>
		</section>
	);
};

export default Events;
