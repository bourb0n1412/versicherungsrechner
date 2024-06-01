import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OwnerDetails.css';

const OwnerDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/personal-details');
  };

  const countries = ['Schweiz', 'Deutschland', 'Österreich'];

  return (
    <div className="owner-details-container">
      <h2>Halterangaben</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nationalität</label>
          <select>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Geburtsdatum</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Führerausweis seit (Jahr)</label>
          <input type="text" placeholder="JJJJ" />
        </div>
        <div className="form-group">
          <label>Ist der Fahrzeughalter der häufigste Lenker?</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Nutzen Personen unter 25 Jahren das Fahrzeug?</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Wurde Ihnen in den letzten 5 Jahren der Führerausweis für länger als 3 Monate entzogen, eine Police gekündigt oder abgelehnt?</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Hatten Sie 3 oder mehr Schadenfälle in den letzten 3 Jahren?</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="button-container">
          <button type="submit" className="owner-details-btn">weiter</button>
        </div>
      </form>
    </div>
  );
};

export default OwnerDetails;
