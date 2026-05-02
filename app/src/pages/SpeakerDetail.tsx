import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import Navbar from '../components/features/Navbar';
import XBackground from '../components/ui/XBackground';
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
  title?: string;
  titlePosition?: 'before' | 'after';
  topic: string;
  bio: string;
  image: string;
  role?: string;
  pronouns?: string;
  affiliations?: string[];
  achievements?: string[];
  socials?: { name: string; url: string }[];
  photoPlaceholder?: string;
  videoUrl?: string;
}

const SpeakerDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const speaker = speakersData.find(s => s.id === slug) as Speaker | undefined;
  const speakerIndex = location.state?.speakerIndex;

  // Store speaker index for scroll restoration before any navigation
  const handleBackClick = useCallback(() => {
    if (speakerIndex !== undefined) {
      sessionStorage.setItem('scrollToSpeaker', speakerIndex.toString());
    }
    navigate('/');
  }, [speakerIndex, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  // Store speaker index for scroll restoration whenever leaving this page
  useEffect(() => {
    if (speakerIndex !== undefined) {
      sessionStorage.setItem('scrollToSpeaker', speakerIndex.toString());
    }

    return () => {
      // Ensure it's stored when component unmounts (any navigation away)
      if (speakerIndex !== undefined) {
        sessionStorage.setItem('scrollToSpeaker', speakerIndex.toString());
      }
    };
  }, [speakerIndex]);

  if (!speaker) {
    return (
      <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
        <Navbar />
        <main className="container max-w-7xl mx-auto px-6 py-32 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Speaker not found</h1>
          <Link to="/#speakers" className="text-tedx-red hover:underline mt-4">← Back</Link>
        </main>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
      <XBackground />
      <Navbar />

      <main className="container max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-12 items-start">
        {/* Back button above image - mobile only */}
        <button onClick={handleBackClick} className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:text-white hover:border-tedx-red hover:bg-tedx-red/10 transition-all duration-300 group backdrop-blur-sm cursor-pointer -mb-6">
          Back
        </button>

        <div className="w-full md:w-1/3 flex flex-col gap-4 relative z-10">
          <div className="w-full aspect-[3/4] bg-gray-900 rounded-xl overflow-hidden border border-white/10">
            <img src={speaker.image} alt={speaker.name} loading="eager" decoding="async" className="w-full h-full object-cover" />
          </div>
          {speaker.videoUrl && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe
                src={speaker.videoUrl}
                title={`${speaker.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          {/* Back button - desktop only */}
          <button onClick={handleBackClick} className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:text-white hover:border-tedx-red hover:bg-tedx-red/10 transition-all duration-300 group self-start backdrop-blur-sm cursor-pointer">
            Back
          </button>
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              {speaker.title && speaker.titlePosition === 'before'
                ? `${speaker.title} ${speaker.name}`
                : speaker.title && speaker.titlePosition === 'after'
                  ? `${speaker.name}, ${speaker.title}`
                  : speaker.name}
            </h1>
            {speaker.pronouns && (
              <p className="text-xl md:text-2xl text-gray-200 font-medium mt-2">{speaker.pronouns}</p>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl text-tedx-red font-bold mb-8">{speaker.topic}</h2>

          <div className="space-y-6 text-lg text-gray-200">
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
            <p className="text-gray-200 text-lg leading-relaxed whitespace-pre-wrap text-justify">
              {speaker.bio}
            </p>
          </div>

          {speaker.achievements && speaker.achievements.length > 0 && (
            <div className="pt-2">
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Achievements</h3>
              <ul className="list-none space-y-3 text-gray-200 text-lg">
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
