import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/features/Navbar';
import Footer from '../components/features/Footer';
import contributorsData, { type DepartmentGroup, type Contributor } from '../data/contributors';

const Contributors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
            Meet the amazing team behind TEDxPUP who made this event possible through their dedication, creativity, and hard work.
          </p>
        </div>

        {/* Contributors by Department */}
        <div className="space-y-20">
          {contributorsData.map((department: DepartmentGroup, deptIndex: number) => (
            <section key={deptIndex} className="border-t border-white/10 pt-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase tracking-wide">
                {department.departmentName}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {department.contributors.map((contributor: Contributor) => (
                  <div 
                    key={contributor.id}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-tedx-red/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    {/* Profile Image Placeholder */}
                    {contributor.image ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white/20 group-hover:border-tedx-red transition-colors">
                        <img 
                          src={contributor.image} 
                          alt={contributor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-tedx-red/20 to-tedx-red/5 mb-4 border-2 border-white/20 group-hover:border-tedx-red transition-colors flex items-center justify-center">
                        <span className="text-2xl font-bold text-tedx-red">
                          {contributor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-tedx-red transition-colors">
                      {contributor.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {contributor.role}
                    </p>
                    
                    {/* Optional: Social Links */}
                    {contributor.socials && contributor.socials.length > 0 && (
                      <div className="flex gap-3 mt-4">
                        {contributor.socials.map((social, idx) => (
                          <a 
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-tedx-red transition-colors"
                            title={social.name}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15 3 21 3 21 9"/>
                              <line x1="10" x2="21" y1="14" y2="3"/>
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Acknowledgment Section */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="bg-gradient-to-br from-tedx-red/10 to-tedx-red/5 border border-tedx-red/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
              Thank You
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A heartfelt thank you to all contributors who dedicated their time, skills, and passion to make TEDxPUP a reality. Your efforts have created an unforgettable experience for our community.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contributors;
