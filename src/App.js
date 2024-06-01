import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VehicleDetails from './components/VehicleDetails';
import OwnerDetails from './components/OwnerDetails';
import PersonalDetails from './components/PersonalDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/owner-details" element={<OwnerDetails />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
