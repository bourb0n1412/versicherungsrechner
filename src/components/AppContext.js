import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [ownerDetails, setOwnerDetails] = useState({});
  const [personalDetails, setPersonalDetails] = useState({});

  const value = {
    vehicleDetails,
    setVehicleDetails,
    ownerDetails,
    setOwnerDetails,
    personalDetails,
    setPersonalDetails,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
