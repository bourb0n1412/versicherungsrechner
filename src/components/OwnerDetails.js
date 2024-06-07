import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import './OwnerDetails.css';

const OwnerDetails = () => {
  const { setOwnerDetails } = useContext(AppContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    nationality: '',
    birthDate: '',
    licenseSince: '',
    primaryDriver: '',
    under25: '',
    licenseSuspended: '',
    accidentHistory: '',
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
    setOwnerDetails(details);
    navigate('/personal-details');
  };

  return (
    <div className="owner-details-container">
      <h2>Halterangaben</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nationalität</label>
          <select name="nationality" value={details.nationality} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="Schweiz">Schweiz</option>
            <option value="Deutschland">Deutschland</option>
            <option value="Österreich">Österreich</option>
            <option value="Frankreich">Frankreich</option>
            <option value="Italien">Italien</option>
            {/* Weitere Optionen hier hinzufügen */}
          </select>
        </div>
        <div className="form-group">
          <label>Geburtsdatum</label>
          <input type="date" name="birthDate" value={details.birthDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Führerausweis seit (Jahr)</label>
          <input type="number" name="licenseSince" value={details.licenseSince} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Ist der Fahrzeughalter der häufigste Lenker?</label>
          <select name="primaryDriver" value={details.primaryDriver} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Nutzen Personen unter 25 Jahren das Fahrzeug?</label>
          <select name="under25" value={details.under25} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Wurde Ihnen in den letzten 5 Jahren der Führerausweis für länger als 3 Monate entzogen, eine Police gekündigt oder abgelehnt?</label>
          <select name="licenseSuspended" value={details.licenseSuspended} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </div>
        <div className="form-group">
          <label>Hatten Sie 3 oder mehr Schadenfälle in den letzten 3 Jahren?</label>
          <select name="accidentHistory" value={details.accidentHistory} onChange={handleChange}>
            <option value="">Bitte wählen</option>
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
