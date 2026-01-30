import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import speakersData from '../data/speakers.json';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaGlobe, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const getSocialIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('facebook')) return <FaFacebook />;
  if (lowerName.includes('instagram')) return <FaInstagram />;
  if (lowerName.includes('linkedin')) return <FaLinkedin />;
  if (lowerName.includes('tiktok')) return <FaTiktok />;
  if (lowerName.includes('twitter') || lowerName.includes('x')) return <FaSquareXTwitter />;
  if (lowerName.includes('youtube')) return <FaYoutube />;
  if (lowerName.includes('mail') || lowerName.includes('email')) return <SiGmail />;
  return <FaGlobe />;
};

interface Speaker {
  id: string;
  name: string;
  topic: string;
  bio: string;
  image: string;
  role?: string;
  pronouns?: string;
  affiliations?: string[];
  achievements?: string[];
  socials?: { name: string; url: string }[];
  photoPlaceholder?: string;
}

const SpeakerDetail = () => {
  const { slug } = useParams();
  const speaker = speakersData.find(s => s.id === slug) as Speaker | undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  if (!speaker) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
            <Navbar />
            <main className="container max-w-7xl mx-auto px-6 py-32 flex flex-col items-center justify-center">
                 <h1 className="text-4xl font-bold">Speaker not found</h1>
                 <Link to="/#speakers" className="text-tedx-red hover:underline mt-4">← Back to Home</Link>
            </main>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-12 items-start">
         <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-900 rounded-xl overflow-hidden border border-white/10">
           <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
         </div>
         
         <div className="w-full md:w-2/3 space-y-6">
           <Link to="/#speakers" className="text-tedx-red hover:underline mb-4 inline-block">← Back to Home</Link>
           <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{speaker.name}</h1>
              {speaker.pronouns && (
                 <span className="text-xl md:text-2xl text-gray-400 font-medium">{speaker.pronouns}</span>
              )}
           </div>
           <h2 className="text-2xl md:text-3xl text-tedx-red font-bold mb-8">{speaker.topic}</h2>
           
           <div className="space-y-6 text-lg text-gray-400">
               {speaker.role && (
                 <div className="text-justify">
                   <span className="font-bold text-white">Role: </span>
                   {speaker.role}
                 </div>
               )}

               {speaker.affiliations && speaker.affiliations.length > 0 && (
                 <div>
                   <span className="font-bold text-white block mb-2">Affiliation</span>
                   <ul className="list-none space-y-3">
                     {speaker.affiliations.map((aff, idx) => (
                       <li key={idx} className="text-justify">{aff}</li>
                     ))}
                   </ul>
                 </div>
               )}

               {speaker.socials && speaker.socials.length > 0 && (
                 <div>
                   <span className="font-bold text-white block mb-2"></span>
                   <div className="flex gap-4">
                     {speaker.socials.map((social, idx) => (
                        <a 
                            key={idx} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-2xl text-tedx-red hover:text-white transition-colors"
                            title={social.name}
                        >
                            {getSocialIcon(social.name)}
                        </a>
                     ))}
                   </div>
                 </div>
               )}
           </div>

           <div className="pt-2">
             <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Biography</h3>
             <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-wrap text-justify">
               {speaker.bio}
             </p>
           </div>

           {speaker.achievements && speaker.achievements.length > 0 && (
             <div className="pt-2">
               <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Achievements</h3>
               <ul className="list-none space-y-3 text-gray-400 text-lg">
                 {speaker.achievements.map((achievement, idx) => {
                   const colonIndex = achievement.indexOf(':');
                   if (colonIndex > -1) {
                     const title = achievement.substring(0, colonIndex);
                     const description = achievement.substring(colonIndex + 1).trim();
                     return (
                       <li key={idx} className="text-justify">
                         <span className="text-tedx-red font-bold">{title}:</span> {description}
                       </li>
                     );
                   }
                   return <li key={idx} className="text-justify">{achievement}</li>;
                 })}
               </ul>
             </div>
           )}
         </div>
      </main>
    </div>
  );
};

export default SpeakerDetail;
