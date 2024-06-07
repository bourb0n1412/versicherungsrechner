import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import './PersonalDetails.css';

const PersonalDetails = () => {
  const { setPersonalDetails } = useContext(AppContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    street: '',
    houseNumber: '',
    zip: '',
    city: '',
    email: '',
    phoneNumber: '',
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
    setPersonalDetails(details);
    navigate('/offers');
  };

  return (
    <div className="personal-details-container">
      <h2>Persönliche Daten</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Anrede</label>
          <select name="salutation" value={details.salutation} onChange={handleChange}>
            <option value="">Bitte wählen</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vorname</label>
          <input type="text" name="firstName" value={details.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Nachname</label>
          <input type="text" name="lastName" value={details.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Strasse</label>
          <input type="text" name="street" value={details.street} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Hausnummer</label>
          <input type="text" name="houseNumber" value={details.houseNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>PLZ</label>
          <input type="text" name="zip" value={details.zip} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Wohnort</label>
          <input type="text" name="city" value={details.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>E-Mail</label>
          <input type="email" name="email" value={details.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telefonnummer</label>
          <input type="text" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} />
        </div>
        <div className="button-container">
          <button type="submit" className="personal-details-btn">Eingaben überprüfen</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
