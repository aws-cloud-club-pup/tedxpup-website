
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpeakerDetail from './pages/SpeakerDetail';
import CreativeWritingDetail from './pages/CreativeWritingDetail';
import Contributors from './pages/Contributors';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/speakers/:slug" element={<SpeakerDetail />} />
          <Route path="/creative-writing/:slug" element={<CreativeWritingDetail />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
