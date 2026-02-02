import { Link } from 'react-router-dom';
import { creativePieces } from '../../data/creativeWritingData';

const CreativeWriting = () => {
  return (
    <section id="creative-writing-entries" className="relative py-24 px-6 bg-black text-white overflow-hidden min-h-screen">

      <div className="relative z-10 container max-w-5xl mx-auto flex flex-col items-center space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            <span className="text-tedx-red">Creative</span> Writing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Voices of the community. Stories that evoke, inspire, and reflect.
          </p>
        </div>

        <div className="w-full grid gap-8">
          {creativePieces.map((piece) => (
            <Link 
              key={piece.id} 
              to={`/creative-writing/${piece.slug}`}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ease-in-out hover:bg-black hover:border-tedx-red/50 hover:shadow-[inset_0_-80px_60px_-20px_rgba(230,43,31,0.2)] block"
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
                     <p className="text-gray-300 whitespace-pre-wrap leading-relaxed font-light text-lg line-clamp-3">
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
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWriting;
