
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpeakerDetail from './pages/SpeakerDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/speakers/:slug" element={<SpeakerDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
