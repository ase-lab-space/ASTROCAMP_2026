import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/Top';
import ComingSoon from './pages/ComingSoon';
import SatelliteDev from './pages/SatelliteDev';
import SatelliteData from './pages/SatelliteData';
import SpaceBusiness from './pages/SpaceBusiness';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/satellite-dev" element={<ComingSoon />} />
          <Route path="/satellite-data" element={<ComingSoon />} />
          <Route path="/space-business" element={<ComingSoon />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/news" element={<ComingSoon />} />
          <Route path="/news/:slug" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;