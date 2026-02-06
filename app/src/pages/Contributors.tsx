import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/features/Navbar';
import Footer from '../components/features/Footer';
import contributorsData, { type DepartmentGroup, type Contributor } from '../data/contributors';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa6';

const Contributors = () => {
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Close modal when clicking outside or pressing ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedContributor(null);
    };
    
    if (selectedContributor) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedContributor]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:text-white hover:border-tedx-red hover:bg-tedx-red/10 transition-all duration-300 group backdrop-blur-sm cursor-pointer mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M19 12H5"/>
              <path d="m12 19-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
            <em className="not-italic text-tedx-red font-bold">Our</em> Contributors
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Meet the amazing team behind TEDxPUP website who made this event possible through their dedication, creativity, and hard work.
          </p>
        </div>

        {/* Contributors by Department */}
        <div className="space-y-20">
          {contributorsData.map((department: DepartmentGroup, deptIndex: number) => (
            <section key={deptIndex} className="border-t border-white/10 pt-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase tracking-wide">
                {department.departmentName}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {department.contributors.map((contributor: Contributor) => (
                  <div 
                    key={contributor.id}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedContributor(contributor)}
                  >
                    {/* Profile Card */}
                    <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/20 group-hover:border-tedx-red transition-all duration-500 ease-in-out group-hover:shadow-[0_0_40px_rgba(255,45,45,0.6)] bg-gradient-to-br from-gray-900 to-black cursor-pointer">
                      {contributor.image ? (
                        <img 
                          src={contributor.image} 
                          alt={contributor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-tedx-red/20 to-tedx-red/5 flex items-center justify-center">
                          <span className="text-6xl md:text-7xl font-bold text-tedx-red">
                            {contributor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                      )}
                      
                      {/* Click indicator overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-bold uppercase tracking-wider bg-tedx-red px-4 py-2 rounded-full">
                          View Profile
                        </span>
                      </div>
                    </div>
                    
                    {/* Info below card */}
                    <div className="mt-4 text-center">
                      <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-tedx-red transition-colors duration-300">
                        {contributor.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 font-medium group-hover:text-gray-200 transition-colors duration-300">
                        {contributor.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {selectedContributor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setSelectedContributor(null)}
        >
          <div
            className="group/modal relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-tedx-red rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-500 ease-in-out hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedContributor(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/80 hover:bg-[#e62b1f] transition-all duration-300 ease-in-out hover:scale-105"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-xl overflow-hidden border border-white/20 bg-gradient-to-br from-tedx-red/20 to-tedx-red/5 shadow-lg">
                  {selectedContributor.image ? (
                    <img
                      src={selectedContributor.image}
                      alt={selectedContributor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                      <span className="text-5xl font-bold text-zinc-600">
                        {selectedContributor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-zinc-100 group-hover/modal:text-tedx-red transition-colors duration-300">
                    {selectedContributor.name}
                  </h2>
                  <p className="text-base text-zinc-400 font-medium group-hover/modal:text-tedx-red/80 transition-colors duration-300">
                    {selectedContributor.role}
                  </p>
                </div>

                {selectedContributor.bio && (
                  <div className="pt-2">
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">About</h3>
                    <p className="text-zinc-300 leading-relaxed text-sm">
                      {selectedContributor.bio}
                    </p>
                  </div>
                )}

                {/* Social Links */}
                <div className="pt-4 border-t border-zinc-800">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Connect</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedContributor.github && (
                      <a
                        href={selectedContributor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 hover:bg-[#e62b1f] border border-zinc-700 hover:border-[#e62b1f] rounded-lg transition-all duration-300 ease-in-out group"
                      >
                        <FaGithub className="text-base group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">GitHub</span>
                      </a>
                    )}
                    {selectedContributor.linkedin && (
                      <a
                        href={selectedContributor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 hover:bg-[#e62b1f] border border-zinc-700 hover:border-[#e62b1f] rounded-lg transition-all duration-300 ease-in-out group"
                      >
                        <FaLinkedin className="text-base group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                      </a>
                    )}
                    {selectedContributor.socials && selectedContributor.socials.length > 0 && (
                      selectedContributor.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 hover:bg-[#e62b1f] border border-zinc-700 hover:border-[#e62b1f] rounded-lg transition-all duration-300 ease-in-out group"
                        >
                          <FaGlobe className="text-base group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">{social.name}</span>
                        </a>
                      ))
                    )}
                    {!selectedContributor.github && !selectedContributor.linkedin && (!selectedContributor.socials || selectedContributor.socials.length === 0) && (
                      <p className="text-sm text-zinc-600 italic">No links available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contributors;
