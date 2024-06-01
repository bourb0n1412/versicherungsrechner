import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/owner-details');
  };

  const carBrands = ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Ford'];
  const carModels = ['A3', 'X5', 'C-Class', 'Golf', 'Fiesta'];
  const cantons = ['Zürich', 'Bern', 'Luzern', 'Uri', 'Schwyz', 'Obwalden', 'Nidwalden', 'Glarus', 'Zug'];

  return (
    <div className="vehicle-details-container">
      <h2>Fahrzeugangaben</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Gefahren wird ein</label>
          <div className="radio-group">
            <div className="radio-item">
              <input type="radio" id="car" name="vehicleType" value="car" defaultChecked />
              <label htmlFor="car">Personenwagen / Lieferwagen</label>
            </div>
            <div className="radio-item">
              <input type="radio" id="motorcycle" name="vehicleType" value="motorcycle" />
              <label htmlFor="motorcycle">Motorrad</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>1. Inverkehrssetzung (Jahr)</label>
          <select>
            <option>Bitte wählen</option>
            {Array.from({ length: 30 }, (_, i) => (
              <option key={i} value={2024 - i}>{2024 - i}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Mein Fahrzeug ist von der Marke</label>
          <select>
            <option>Bitte wählen</option>
            {carBrands.map((brand, index) => (
              <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Das Modell ist</label>
          <select>
            <option>Bitte wählen</option>
            {carModels.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Es fährt mit (Treibstoff)</label>
          <select>
            <option>Bitte wählen</option>
            <option value="benzin">Benzin</option>
            <option value="diesel">Diesel</option>
            <option value="elektro">Elektro</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Die Leistung beträgt (PS)</label>
          <select>
            <option>Bitte wählen</option>
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i} value={50 + i * 10}>{50 + i * 10}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Im Besitz seit</label>
          <select>
            <option>Bitte wählen</option>
            {Array.from({ length: 30 }, (_, i) => (
              <option key={i} value={2024 - i}>{2024 - i}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Zulassungskanton</label>
          <select>
            <option>Bitte wählen</option>
            {cantons.map((canton, index) => (
              <option key={index} value={canton}>{canton}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Wird das Fahrzeug für Dienstfahrten verwendet?</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Wird das Fahrzeug für den kommerziellen, gewerbsmässigen Personen- resp. Warentransport verwendet?</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Leasing</label>
          <select>
            <option>Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gewünschter Versicherungsbeginn</label>
          <input type="date" />
        </div>
        <div className="button-container">
          <button type="submit" className="vehicle-details-btn">weiter</button>
        </div>
      </form>
    </div>
  );
};

export default VehicleDetails;
