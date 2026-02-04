
import type { FC } from 'react';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Program', href: '#program' },
    { label: 'Creative Writing Entries', href: '#creative-writing-entries' },
    { label: 'Sponsors & Partners', href: '#sponsors-partners' },
    { label: 'FAQs', href: '#faqs' },
];

const Footer: FC = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-black/80 to-[#7a0000] text-white pt-16 pb-0 overflow-hidden font-sans border-t border-white/10 relative">
            {/* Top Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 justify-items-start">

                    {/* Brand Column (Left) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-6">
                        <div className="flex items-baseline space-x-1 -ml-3">
                            <img src="/logo-white.webp" alt="TEDxPUP" className="h-12 w-auto object-contain" />
                        </div>

                        <div className="text-sm text-gray-400">
                            ©2026 TEDxPUP. All rights reserved
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-tedx-red font-semibold text-base mb-2">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Contact / Socials */}
                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
                        <h3 className="text-tedx-red font-semibold text-base mb-2">Contact / Socials</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Email: <a href="mailto:tedxpup@gmail.com" className="hover:text-white transition-colors">tedxpup@gmail.com</a></li>
                            {/* Social Icons */}
                            <div className="flex items-center space-x-4">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/TEDxPUP" className="hover:text-tedx-red transition-colors" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.138v.855h3.897l-.52 3.669h-3.377v7.98h-4.943z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/tedxpup/" className="hover:text-tedx-red transition-colors" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                {/* Tiktok */}
                                <a href="https://www.tiktok.com/@tedxpup" className="hover:text-tedx-red transition-colors" aria-label="Tiktok">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="none" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                    </svg>
                                </a>
                            </div>
                        </ul>
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
