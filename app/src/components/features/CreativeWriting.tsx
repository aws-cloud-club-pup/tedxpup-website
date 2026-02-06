import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { creativePieces } from '../../data/creativeWritingData';
import ScrollReveal from '../ui/ScrollReveal';

const CreativeWriting = () => {
  useEffect(() => {
    // Check if we need to scroll to a specific piece after navigation
    const scrollToPiece = sessionStorage.getItem('scrollToPiece');
    if (scrollToPiece !== null) {
      const pieceIndex = parseInt(scrollToPiece, 10);
      sessionStorage.removeItem('scrollToPiece');

      // Wait for DOM to be ready
      setTimeout(() => {
        const allCards = document.querySelectorAll('[data-piece-id]');
        const targetCard = allCards[pieceIndex];

        if (targetCard) {
          const cardRect = targetCard.getBoundingClientRect();
          const absoluteTop = cardRect.top + window.pageYOffset;
          const navbarHeight = 80;
          const offsetPosition = absoluteTop - navbarHeight - 40;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <section id="creative-writing" className="relative py-24 px-6 bg-black text-white overflow-hidden min-h-screen">

      {/* Creative Background - Top & Bottom Natural Glow */}
      <div className="absolute top-[-10%] left-[-20%] right-[-20%] h-[60%] bg-[radial-gradient(ellipse_at_top,_rgba(230,43,31,0.2)_0%,_rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-20%] right-[-20%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,_rgba(230,43,31,0.2)_0%,_rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none mix-blend-screen" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto flex flex-col items-center space-y-16">
        <ScrollReveal className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            <span className="text-tedx-red">Creative</span> Writing Entries
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Voices of the community. Stories that evoke, inspire, and reflect.
          </p>
        </ScrollReveal>

        <div className="w-full grid gap-8">
          {creativePieces.map((piece, index) => (
            <ScrollReveal key={piece.id} delay={`${index * 0.03}s`}>
              <Link
                to={`/creative-writing/${piece.slug}`}
                state={{ pieceIndex: index }}
                data-piece-id={piece.id}
                className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ease-in-out hover:bg-black hover:border-tedx-red hover:shadow-[0_0_30px_rgba(255,45,45,0.5)] block"
              >
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="space-y-4 flex-1">

                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-tedx-red/20 border border-tedx-red/30 text-tedx-red text-xs md:text-sm font-bold tracking-wider uppercase">
                      {piece.category}
                    </div>

                    {/* Title & Author */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-tedx-red transition-colors duration-300">
                        {piece.title}
                      </h3>
                      <p className="text-gray-400 mt-2 font-medium">
                        By <span className="text-gray-200">{piece.author}</span>
                      </p>
                    </div>

                    {/* Content Preview */}
                    <div className="relative overflow-hidden max-h-24 opacity-80 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                      <p className="text-gray-300 whitespace-pre-wrap leading-relaxed font-light text-xl line-clamp-3">
                        {piece.content}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div
                      className="group/btn flex items-center gap-2 text-sm font-semibold text-white tracking-widest uppercase mt-4 group-hover:text-tedx-red transition-colors"
                    >
                      Read Full Piece
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>

                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWriting;