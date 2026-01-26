import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/Top';
import SatelliteDev from './pages/SatelliteDev';
import SatelliteData from './pages/SatelliteData';
import SpaceBusiness from './pages/SpaceBusiness';
import './App.css';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cancellation from './pages/Cancellation';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/satellite-dev" element={<SatelliteDev />} />
          <Route path="/satellite-data" element={<SatelliteData />} />
          <Route path="/space-business" element={<SpaceBusiness />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cancellation" element={<Cancellation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;