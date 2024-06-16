import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/vehicle-details');
  };

  return (
    <div className="home-container">
      <h1 className="title">Autoversicherungsrechner</h1>
      <p className="subtitle">Topleistung und auf ihre Bedürfnisse abgestimmt</p>
      <button className="btn-primary" onClick={handleButtonClick}>Prämien anzeigen</button>
    </div>
  );
};

export default Home;
