import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/features/Navbar';
import Footer from '../components/features/Footer';
import contributorsData, { type DepartmentGroup, type Contributor } from '../data/contributors';
import { FaGithub, FaLinkedin, FaGlobe, FaFacebook, FaInstagram, FaTiktok, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const getSocialIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('github')) return <FaGithub />;
  if (lowerName.includes('linkedin')) return <FaLinkedin />;
  if (lowerName.includes('facebook')) return <FaFacebook />;
  if (lowerName.includes('instagram')) return <FaInstagram />;
  if (lowerName.includes('tiktok')) return <FaTiktok />;
  if (lowerName.includes('twitter') || lowerName.includes('x')) return <FaSquareXTwitter />;
  if (lowerName.includes('youtube')) return <FaYoutube />;
  if (lowerName.includes('mail') || lowerName.includes('email')) return <SiGmail />;
  return <FaGlobe />;
};

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
            to="/#footer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:text-white hover:border-tedx-red hover:bg-tedx-red/10 transition-all duration-300 group backdrop-blur-sm cursor-pointer mb-8"
          >
            Back
          </Link>

          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
            <em className="not-italic text-tedx-red font-bold">Our</em> Contributors
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Meet the amazing team behind TEDxPUP website who made this event possible through their dedication, creativity, and hard work.
          </p>
        </div>

        {/* Contributors by Department */}
        <div className="space-y-16">
          {contributorsData.map((department: DepartmentGroup, deptIndex: number) => (
            <section key={deptIndex}>
              {/* Department Header with Line */}
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                  {department.departmentName}
                </h2>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              {/* Contributors Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                {department.contributors.map((contributor: Contributor) => (
                  <div key={contributor.id} className="flex flex-col">
                    {/* Profile Photo */}
                    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900 to-black mb-4">
                      {contributor.image ? (
                        <img
                          src={contributor.image}
                          alt={contributor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-tedx-red/20 to-tedx-red/5 flex items-center justify-center">
                          <span className="text-4xl md:text-5xl font-bold text-tedx-red">
                            {contributor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-base md:text-lg font-bold mb-1 leading-tight">
                      {contributor.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-medium mb-3">
                      {contributor.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-auto">
                      {contributor.github && (
                        <a
                          href={contributor.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-tedx-red hover:text-white transition-colors"
                          title="GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {contributor.linkedin && (
                        <a
                          href={contributor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-tedx-red hover:text-white transition-colors"
                          title="LinkedIn"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      {contributor.socials && contributor.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-tedx-red hover:text-white transition-colors"
                          title={social.name}
                        >
                          {getSocialIcon(social.name)}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contributors;
