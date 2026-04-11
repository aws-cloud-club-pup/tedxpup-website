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
    <section id="creative-writing" className="relative py-16 md:py-24 px-6 bg-black text-white overflow-hidden min-h-screen">

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale contrast-[1.8] brightness-[1.1]"
          style={{ backgroundImage: "url('/creativewriting/tedxpup_bg5.webp')", opacity: 0.45 }}
        />
        {/* Layer: diagonal lines */}
        <img
          src="/creativewriting/tedxpup_bglayer2.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.8] brightness-[1.1]"
          style={{ opacity: 0.4, mixBlendMode: "screen" }}
        />
        {/* Darken */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Edge fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto flex flex-col items-center space-y-10 md:space-y-14">
        <ScrollReveal className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            <span className="text-tedx-red">Creative</span> Writing Entries
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Voices of the community. Stories that evoke, inspire, and reflect.
          </p>
        </ScrollReveal>

        <div className="w-full grid gap-4 md:gap-6">
          {creativePieces.map((piece, index) => (
            <ScrollReveal key={piece.id} delay={`${index * 0.03}s`}>
              <Link
                to={`/creative-writing/${piece.slug}`}
                state={{ pieceIndex: index }}
                data-piece-id={piece.id}
                className="group relative p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ease-in-out hover:bg-black hover:border-tedx-red hover:shadow-[0_0_30px_rgba(255,45,45,0.5)] block"
              >
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="space-y-4 flex-1">

                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-tedx-red/20 border border-tedx-red/30 text-tedx-red text-xs md:text-sm font-bold tracking-wider uppercase">
                      {piece.category}
                    </div>

                    {/* Title & Author */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-tedx-red transition-colors duration-300">
                        {piece.title}
                      </h3>
                      <p className="text-gray-400 mt-2 font-medium">
                        By <span className="text-gray-200">{piece.author}</span>
                      </p>
                    </div>

                    {/* Content Preview */}
                    <div className="relative overflow-hidden max-h-24 opacity-80 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                      <p className="text-gray-300 whitespace-pre-wrap leading-relaxed font-light text-sm sm:text-base md:text-xl line-clamp-3">
                        {piece.content}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div
                      className="group/btn flex items-center gap-2 text-sm font-semibold text-white tracking-widest uppercase mt-4 group-hover:text-tedx-red transition-colors"
                    >
                      Read Full Piece
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