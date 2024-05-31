import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import VehicleDetails from './VehicleDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle-details" element={<VehicleDetails />} />
        {/* Weitere Routen hier hinzufügen */}
      </Routes>
    </Router>
  );
};

export default App;
