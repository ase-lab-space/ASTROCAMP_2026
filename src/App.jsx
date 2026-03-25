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
          <Route path="/satellite-dev" element={<SatelliteDev />} />
          <Route path="/satellite-data" element={<SatelliteData />} />
          <Route path="/space-business" element={<SpaceBusiness />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;