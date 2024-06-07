import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const { setVehicleDetails } = useContext(AppContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    vehicleType: 'car',
    year: '',
    brand: '',
    model: '',
    fuel: '',
    power: '',
    ownershipYear: '',
    registrationCanton: '',
    usedForBusiness: '',
    commercialUse: '',
    leasing: '',
    insuranceStart: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVehicleDetails(details);
    navigate('/owner-details');
  };

  return (
    <div className="vehicle-details-container">
      <h2>Fahrzeugangaben</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Gefahren wird ein</label>
          <div className="radio-group">
            <input type="radio" id="car" name="vehicleType" value="car" checked={details.vehicleType === 'car'} onChange={handleChange} />
            <label htmlFor="car">Personenwagen / Lieferwagen</label>
            <input type="radio" id="motorcycle" name="vehicleType" value="motorcycle" checked={details.vehicleType === 'motorcycle'} onChange={handleChange} />
            <label htmlFor="motorcycle">Motorrad</label>
          </div>
        </div>
        <div className="form-group">
          <label>1. Inverkehrssetzung (Jahr)</label>
          <select name="year" value={details.year} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            {Array.from(new Array(31), (x, i) => i + 1990).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Mein Fahrzeug ist von der Marke</label>
          <select name="brand" value={details.brand} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            {/* Weitere Marken */}
          </select>
        </div>
        <div className="form-group">
          <label>Das Modell ist</label>
          <select name="model" value={details.model} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            {/* Modelloptionen abhängig von der Marke */}
            <option value="A4">A4</option>
            <option value="A6">A6</option>
            <option value="X5">X5</option>
            <option value="C-Class">C-Class</option>
            <option value="Golf">Golf</option>
            <option value="Corolla">Corolla</option>
            <option value="Focus">Focus</option>
            <option value="Civic">Civic</option>
          </select>
        </div>
        <div className="form-group">
          <label>Es fährt mit (Treibstoff)</label>
          <select name="fuel" value={details.fuel} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="Benzin">Benzin</option>
            <option value="Diesel">Diesel</option>
            <option value="Elektro">Elektro</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Die Leistung beträgt (PS)</label>
          <select name="power" value={details.power} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            {Array.from(new Array(21), (x, i) => (i + 1) * 50).map(power => (
              <option key={power} value={power}>{power}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Im Besitz seit</label>
          <select name="ownershipYear" value={details.ownershipYear} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            {Array.from(new Array(31), (x, i) => i + 1990).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Zulassungskanton</label>
          <select name="registrationCanton" value={details.registrationCanton} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="Zürich">Zürich</option>
            <option value="Bern">Bern</option>
            <option value="Luzern">Luzern</option>
            <option value="Uri">Uri</option>
            <option value="Schwyz">Schwyz</option>
            <option value="Obwalden">Obwalden</option>
            <option value="Nidwalden">Nidwalden</option>
            <option value="Glarus">Glarus</option>
            <option value="Zug">Zug</option>
            <option value="Freiburg">Freiburg</option>
            <option value="Solothurn">Solothurn</option>
            <option value="Basel-Stadt">Basel-Stadt</option>
            <option value="Basel-Landschaft">Basel-Landschaft</option>
            <option value="Schaffhausen">Schaffhausen</option>
            <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
            <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
            <option value="St. Gallen">St. Gallen</option>
            <option value="Graubünden">Graubünden</option>
            <option value="Aargau">Aargau</option>
            <option value="Thurgau">Thurgau</option>
            <option value="Tessin">Tessin</option>
            <option value="Waadt">Waadt</option>
            <option value="Wallis">Wallis</option>
            <option value="Neuenburg">Neuenburg</option>
            <option value="Genf">Genf</option>
            <option value="Jura">Jura</option>
          </select>
        </div>
        <div className="form-group">
          <label>Wird das Fahrzeug für Dienstfahrten verwendet?</label>
          <select name="usedForBusiness" value={details.usedForBusiness} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Wird das Fahrzeug für den kommerziellen, gewerbsmässigen Personen- resp. Warentransport verwendet?</label>
          <select name="commercialUse" value={details.commercialUse} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Leasing</label>
          <select name="leasing" value={details.leasing} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gewünschter Versicherungsbeginn</label>
          <input type="date" name="insuranceStart" value={details.insuranceStart} onChange={handleChange} />
        </div>
        <div className="button-container">
          <button type="submit" className="vehicle-details-btn">weiter</button>
        </div>
      </form>
    </div>
  );
};

export default VehicleDetails;
