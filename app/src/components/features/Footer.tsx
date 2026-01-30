
import type { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-black/80 to-[#7a0000] text-white pt-16 pb-0 overflow-hidden font-sans border-t border-white/10 relative">
            {/* Top Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 justify-items-start">
                    
                    {/* Brand Column (Left) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-6">
                        <div className="flex items-baseline space-x-1">
                            <img src="/logo-white.webp" alt="TEDxPUP" className="h-12 w-auto object-contain" />
                        </div>
                        
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 ml-3">
                            {/* Twitter / X */}
                            <a href="#" className="hover:text-tedx-red transition-colors" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="hover:text-tedx-red transition-colors" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.138v.855h3.897l-.52 3.669h-3.377v7.98h-4.943z"/>
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="hover:text-tedx-red transition-colors" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="hover:text-tedx-red transition-colors" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="hover:text-tedx-red transition-colors" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                        </div>
                        
                        <div className="text-sm text-gray-400 ml-3">
                            All rights reserved
                        </div>
                    </div>

                    {/* TED Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-tedx-red font-semibold text-base mb-2">TED Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Terms of use</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Notice</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Refer a friend FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Premium services terms</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-tedx-red font-semibold text-base mb-2">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
                        <h3 className="text-tedx-red font-semibold text-base mb-2">Contact us</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>+63 - 9876543210</li>
                            <li><a href="mailto:tedxpup@gmail.com" className="hover:text-white transition-colors">tedxpup@gmail.com</a></li>
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
            <div className="text-center text-xs text-gray-100 border-t border-white/5 pt-4 pb-4 relative z-10 w-full">
                @2026 TEDxPUP. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
