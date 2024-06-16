import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Home from './components/Home';
import VehicleDetails from './components/VehicleDetails';
import OwnerDetails from './components/OwnerDetails';
import PersonalDetails from './components/PersonalDetails';
import Offers from './components/Offers';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle-details" element={<VehicleDetails />} />
            <Route path="/owner-details" element={<OwnerDetails />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
