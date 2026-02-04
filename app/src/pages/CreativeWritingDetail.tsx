import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import Navbar from '../components/features/Navbar';
import { creativePieces } from '../data/creativeWritingData';
import { useEffect } from 'react';

import XBackground from '../components/ui/XBackground';

const CreativeWritingDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const piece = creativePieces.find(p => p.slug === slug);
  const pieceIndex = location.state?.pieceIndex;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    // Store the piece index in sessionStorage for scroll after navigation
    if (pieceIndex !== undefined) {
      sessionStorage.setItem('scrollToPiece', pieceIndex.toString());
    }
    navigate('/');
  };

  if (!piece) {
    return (
      <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Piece Not Found</h1>
            <Link to="/" className="text-tedx-red hover:underline">← Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1 relative overflow-hidden">
         <XBackground />
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tedx-red/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="relative z-10 container max-w-4xl mx-auto px-6 py-32 flex flex-col gap-8">
           
           <button onClick={handleBackClick} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:text-white hover:border-tedx-red hover:bg-tedx-red/10 transition-all duration-300 group self-start backdrop-blur-sm cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
               <path d="M19 12H5"/>
               <path d="m12 19-7-7 7-7"/>
             </svg>
             Back
           </button>

           <header className="space-y-6 border-b border-white/10 pb-8">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-tedx-red/20 border border-tedx-red/30 text-tedx-red text-sm font-bold tracking-wider uppercase">
                {piece.category}
             </div>
             
             <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">
               {piece.title}
             </h1>

             <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400">
                <p className="text-lg">
                   By <span className="text-white font-semibold">{piece.author}</span>
                </p>
                {piece.link && (
                    <>
                        <span className="hidden md:inline text-gray-700">•</span>
                        <a 
                          href={piece.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-tedx-red/80 hover:text-tedx-red hover:underline flex items-center gap-1 w-fit"
                        >
                          View Original Submission 
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                    </>
                )}
             </div>
           </header>
           
           <article className="prose prose-invert prose-lg max-w-none">
             <div className="whitespace-pre-wrap leading-relaxed font-light text-lg text-gray-300">
               {piece.content}
             </div>
           </article>

         </div>
      </main>
    </div>
  );
};

export default CreativeWritingDetail;
