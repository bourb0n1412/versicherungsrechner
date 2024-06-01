import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalDetails.css';

const PersonalDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="personal-details-container">
      <h2>Persönliche Daten</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Anrede</label>
          <select>
            <option>Bitte wählen</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vorname</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Nachname</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Strasse</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Hausnummer</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>PLZ</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Wohnort</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>E-Mail</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Telefonnummer</label>
          <input type="text" />
        </div>
        <div className="button-container">
          <button type="submit" className="personal-details-btn">Eingaben überprüfen</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
