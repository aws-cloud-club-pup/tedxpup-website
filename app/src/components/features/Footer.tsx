
import type { FC } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Event Location', href: '#location' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Program', href: '#program' },
    { label: 'Creative Writing Entries', href: '#creative-writing' },
    { label: 'Sponsors & Partners', href: '#sponsors-partners' },
    { label: 'FAQs', href: '#faqs' },
];

const Footer: FC = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-black/80 to-[#7a0000] text-white pt-16 pb-0 overflow-hidden font-sans relative">
            {/* Top Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 justify-items-start">

                    {/* Brand Column (Left) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-6">
                        <div className="flex items-baseline space-x-1 -ml-3">
                            <img src="/logo-white.webp" alt="TEDxPUP" className="h-12 w-auto object-contain" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <div className="text-sm text-gray-400">
                                ©2026 TEDxPUP. All rights reserved
                            </div>
                            <a
                                href="/contributors"
                                className="text-sm text-gray-400 hover:text-tedx-red transition-colors"
                            >
                                Contributors
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-white font-semibold text-base mb-2">NAVIGATION</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-tedx-red transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Contact / Socials */}
                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
                        <h3 className="text-white font-semibold text-base mb-2">CONTACT US</h3>

                        {/* Social Icons - Vertical Layout */}
                        <div className="flex flex-col space-y-3 mt-2">
                            {/* Email */}
                            <a href="mailto:tedxpup@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group" aria-label="Email">
                                <span className="text-xl text-gray-400 group-hover:text-tedx-red transition-colors">
                                    <SiGmail />
                                </span>
                                <span className="text-sm text-gray-400 group-hover:text-tedx-red  transition-colors">tedxpup@gmail.com</span>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/TEDxPUP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group" aria-label="Facebook">
                                <span className="text-xl text-gray-400 group-hover:text-tedx-red transition-colors">
                                    <FaFacebook />
                                </span>
                                <span className="text-sm text-gray-400 group-hover:text-tedx-red transition-colors">TEDxPUP Official Facebook Page</span>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/tedxpup/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group" aria-label="Instagram">
                                <span className="text-xl text-gray-400 group-hover:text-tedx-red transition-colors">
                                    <FaInstagram />
                                </span>
                                <span className="text-sm text-gray-400 group-hover:text-tedx-red transition-colors">TEDxPUP Official Instagram Page</span>
                            </a>
                            {/* Tiktok */}
                            <a href="https://www.tiktok.com/@tedxpup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group" aria-label="Tiktok">
                                <span className="text-xl text-gray-400 group-hover:text-tedx-red transition-colors">
                                    <FaTiktok />
                                </span>
                                <span className="text-sm text-gray-400 group-hover:text-tedx-red transition-colors">TEDxPUP Official Tiktok Page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Massive Brand Presence */}
            <div className="relative w-full overflow-hidden flex justify-center items-end opacity-100 pb-4 pointer-events-none select-none">
                <img
                    src="/logo-white.webp"
                    alt="TEDxPUP"
                    className="w-[90%] md:w-[80%] h-auto"
                />
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-xs text-gray-100 border-t border-white/5 pt-4 pb-4 px-6 relative z-10 w-full">
                This independent TEDx event is operated under license from TED.
            </div>
        </footer>
    );
};

export default Footer;
