import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import speakersData from '../../data/speakers.json';

const Speakers = () => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRatiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.getAttribute('data-speaker-id');
          if (cardId) {
            if (entry.isIntersecting) {
              cardRatiosRef.current.set(cardId, entry.intersectionRatio);
            } else {
              cardRatiosRef.current.delete(cardId);
            }
          }
        });

        // Find the card with the highest intersection ratio
        let maxRatio = 0;
        let maxCardId: string | null = null;
        cardRatiosRef.current.forEach((ratio, cardId) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxCardId = cardId;
          }
        });

        // Only set focused card if it has at least 50% visibility
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

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('[data-speaker-id]');
    cards.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    // Check if we need to scroll to a specific speaker after navigation
    const scrollToSpeaker = sessionStorage.getItem('scrollToSpeaker');
    if (scrollToSpeaker !== null) {
      const speakerIndex = parseInt(scrollToSpeaker, 10);
      sessionStorage.removeItem('scrollToSpeaker');
      
      // Wait for DOM to be ready
      setTimeout(() => {
        const allCards = document.querySelectorAll('[data-speaker-id]');
        const isMobile = window.innerWidth < 1024;
        
        let targetCard;
        if (isMobile) {
          // Mobile: Scroll to exact card
          targetCard = allCards[speakerIndex];
        } else {
          // Desktop: Scroll to first card of the row (4 cards per row)
          const cardsPerRow = 4;
          const rowIndex = Math.floor(speakerIndex / cardsPerRow);
          const firstCardInRow = rowIndex * cardsPerRow;
          targetCard = allCards[firstCardInRow];
        }
        
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

    return () => {
      cards.forEach((card) => {
        if (observerRef.current) {
          observerRef.current.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="speakers" className="py-24 px-6 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center"><span className="text-tedx-red">OUR</span> SPEAKERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => {
            const isFocused = focusedCard === speaker.id;
            return (
              <Link 
                key={speaker.id} 
                to={`/speakers/${speaker.id}`}
                state={{ speakerIndex: index }}
                data-speaker-id={speaker.id}
                className={`group relative aspect-[3/4] bg-gray-900 rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 block ${
                  isFocused ? 'border-tedx-red shadow-[0_0_30px_rgba(255,45,45,0.5)] md:border-white/10 md:shadow-none md:hover:border-tedx-red md:hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]' : 'border-white/10 md:hover:border-tedx-red md:hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]'
                }`}
              >
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className={`object-cover w-full h-full transition-all duration-500 ${
                    isFocused ? 'scale-105 grayscale-0 md:scale-100 md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0' : 'grayscale md:group-hover:scale-105 md:group-hover:grayscale-0'
                  }`}
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isFocused ? 'max-h-40 md:max-h-0 md:group-hover:max-h-40' : 'max-h-0 md:group-hover:max-h-40'
                  }`}>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-4 leading-relaxed font-light">
                      {speaker.role}
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold">{speaker.name}</h3>
                  <p className="text-tedx-red font-medium">{speaker.pronouns}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
