import { Link } from 'react-router-dom';
import speakersData from '../../data/speakers.json';

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 px-6 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-center"><span className="text-tedx-red">OUR</span> SPEAKERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker) => (
            <Link key={speaker.id} to={`/speakers/${speaker.id}`} className="group relative aspect-[3/4] bg-gray-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-tedx-red transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,45,0.5)] block">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  <p className="text-sm text-gray-200 mb-4 line-clamp-4 leading-relaxed font-light">
                    {speaker.role}
                  </p>
                </div>
                <h3 className="text-2xl font-bold">{speaker.name}</h3>
                <p className="text-tedx-red font-medium">{speaker.pronouns}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
