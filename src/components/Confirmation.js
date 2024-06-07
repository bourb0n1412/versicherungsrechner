import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { offerTitle, calculatedPrice } = location.state;

  return (
    <div className="confirmation-container">
      <h2>Bestätigung</h2>
      <p>Sie haben das Produkt <strong>{offerTitle}</strong> gewählt.</p>
      <p>Der Preis beträgt <strong>CHF {calculatedPrice}</strong> pro Jahr.</p>
      <button className="btn-home" onClick={() => navigate('/')}>Zurück zur Startseite</button>
    </div>
  );
};

export default Confirmation;
