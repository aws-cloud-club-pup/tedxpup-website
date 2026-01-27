import { Link } from 'react-router-dom';

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 px-6 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center"><span className="text-tedx-red">OUST TRANDING</span> SPEAKERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link key={i} to={`/speakers/speaker-${i}`} className="group relative aspect-[3/4] bg-gray-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-tedx-red/50 transition-colors block">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xl group-hover:text-tedx-red transition-colors">
                Speaker {i} Photo
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-bold">Speaker Name</h3>
                <p className="text-tedx-red font-medium">Topic Title</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
