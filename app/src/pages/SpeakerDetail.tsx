import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/features/Navbar';

const SpeakerDetail = () => {
  const { slug } = useParams();

  // Mock data - in a real app, this would come from a data source/API
  const speaker = {
    name: "Speaker Name",
    topic: "Uncovering the Unknown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "Speaker Photo"
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-12 items-start">
         <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-900 rounded-xl flex items-center justify-center text-gray-500 border border-white/10">
           {speaker.image} for {slug}
         </div>
         
         <div className="w-full md:w-2/3 space-y-6">
           <Link to="/" className="text-tedx-red hover:underline mb-4 inline-block">← Back to Home</Link>
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{speaker.name}</h1>
           <h2 className="text-2xl md:text-3xl text-tedx-red font-bold">{speaker.topic}</h2>
           <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
             {speaker.description}
           </p>
         </div>
      </main>
    </div>
  );
};

export default SpeakerDetail;
