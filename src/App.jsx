import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/Top';
import SatelliteDev from './pages/SatelliteDev';
import SatelliteData from './pages/SatelliteData';
import SpaceBusiness from './pages/SpaceBusiness';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;