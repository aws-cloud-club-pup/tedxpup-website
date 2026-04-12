import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import SpeakerDetail from './pages/SpeakerDetail';
import CreativeWritingDetail from './pages/CreativeWritingDetail';
import Contributors from './pages/Contributors';
import PageNotFound from './pages/PageNotFound';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll for all hash nav links (e.g. /#about, #about)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Match /#section or #section (with or without leading slash)
      const match = href.match(/^(?:https?:\/\/[^/]+)?\/?(#.+)$/) ||
                    href.match(/^(#.+)$/);
      if (!match) return;

      const hash = match[1]; // e.g. "#about"
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `/#${id}`);
    };

    document.addEventListener('click', handleClick, { passive: false });
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans overflow-x-hidden">
        <AnimatePresence>
          {isLoading ? (
            <LoadingScreen key="loader" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/speakers/:slug" element={<SpeakerDetail />} />
                <Route path="/creative-writing/:slug" element={<CreativeWritingDetail />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
