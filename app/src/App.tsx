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
    // Simulate loading time (or wait for resources)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s duration to ensure logo is seen

    return () => clearTimeout(timer);
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
