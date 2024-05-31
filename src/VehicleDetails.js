import React from 'react';
import './VehicleDetails.css';

const VehicleDetails = () => {
  return (
    <div className="vehicle-details-container">
      <h2>Fahrzeugangaben</h2>
      <form>
        <div className="form-group">
          <label>Gefahren wird ein</label>
          <div className="radio-group">
            <input type="radio" id="car" name="vehicleType" value="car" defaultChecked />
            <label htmlFor="car">Personenwagen / Lieferwagen</label>
            <input type="radio" id="motorcycle" name="vehicleType" value="motorcycle" />
            <label htmlFor="motorcycle">Motorrad</label>
          </div>
        </div>
        <div className="form-group">
          <label>1. Inverkehrssetzung (Jahr)</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Mein Fahrzeug ist von der Marke</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Das Modell ist</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Es fährt mit (Treibstoff)</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Die Leistung beträgt (PS)</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Im Besitz seit</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Zulassungskanton</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Wird das Fahrzeug für Dienstfahrten verwendet?</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Wird das Fahrzeug für den kommerziellen, gewerbsmässigen Personen- resp. Warentransport verwendet?</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Leasing</label>
          <select>
            <option>Bitte wählen</option>
            {/* Optionen hier hinzufügen */}
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
