import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import '../styles/Offers.css';

const Offers = () => {
  const { vehicleDetails, ownerDetails, personalDetails } = useContext(AppContext);
  const navigate = useNavigate();

  const calculatePrice = (basePrice) => {
    let price = basePrice;

    if (vehicleDetails.fuel === 'Diesel') {
      price += 100;
    } else if (vehicleDetails.fuel === 'Elektro') {
      price -= 100;
    } else if (vehicleDetails.fuel === 'Hybrid') {
      price -= 50;
    }

    if (ownerDetails.under25 === 'ja') {
      price += 200;
    }

    if (vehicleDetails.leasing === 'ja') {
      price += 150;
    }

    if (vehicleDetails.vehicleType === 'motorcycle') {
      price -= 50;
    }

    if (vehicleDetails.power > 150) {
      price += 100;
    } else if (vehicleDetails.power > 100) {
      price += 50;
    }

    if (vehicleDetails.usedForBusiness === 'ja') {
      price += 100;
    }

    if (ownerDetails.licenseSuspended === 'ja') {
      price += 300;
    }

    if (ownerDetails.accidentHistory === 'ja') {
      price += 200;
    }

    if (personalDetails.salutation === 'Frau') {
      price -= 50;
    }

    // Zusätzliche Faktoren
    if (vehicleDetails.registrationCanton === 'Zürich') {
      price += 50;
    } else if (vehicleDetails.registrationCanton === 'Genf') {
      price += 50;
    }

    const currentYear = new Date().getFullYear();
    const vehicleAge = currentYear - vehicleDetails.year;
    if (vehicleAge > 10) {
      price += 100;
    } else if (vehicleAge > 5) {
      price += 50;
    }

    const licenseYears = currentYear - ownerDetails.licenseSince;
    if (licenseYears < 2) {
      price += 200;
    } else if (licenseYears < 5) {
      price += 100;
    }

    if (personalDetails.phoneNumber.startsWith('+41')) {
      price -= 10; // Rabatt für Schweizer Telefonnummern
    }

    return price;
  };

  const offers = [
    {
      title: "Car M",
      basePrice: 500,
      features: [
        "Haftpflicht",
        "Selbstbehalt CHF 500",
        "Teilkasko",
        "Reparaturmodell: Partnergarage",
        "Kollisionskasko",
        "Grobfahrlässigkeitsschutz",
        "Unfall Standard"
      ],
    },
    {
      title: "Car L",
      basePrice: 700,
      features: [
        "Haftpflicht",
        "Selbstbehalt CHF 300",
        "Teilkasko",
        "Reparaturmodell: Partnergarage",
        "Kollisionskasko",
        "Grobfahrlässigkeitsschutz",
        "Unfall Basis"
      ],
    },
    {
      title: "Car XL",
      basePrice: 900,
      features: [
        "Haftpflicht",
        "Selbstbehalt CHF 100",
        "Teilkasko",
        "Reparaturmodell: Partnergarage",
        "Kollisionskasko",
        "Grobfahrlässigkeitsschutz",
        "Unfall Plus"
      ],
    },
  ];

  const handleSelect = (offerTitle, calculatedPrice) => {
    navigate('/confirmation', { state: { offerTitle, calculatedPrice } });
  };

  return (
    <div className="offers-container">
      {offers.map((offer, index) => (
        <div key={index} className={`offer ${index === 1 ? 'highlight' : ''}`}>
          <h3>{offer.title}</h3>
          <p>CHF {calculatePrice(offer.basePrice)} / Jahr</p>
          <button
            className="btn-select"
            onClick={() => handleSelect(offer.title, calculatePrice(offer.basePrice))}
          >
            Produkt wählen
          </button>
          <ul>
            {offer.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Offers;
