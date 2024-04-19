// FlightContext.js
import React, { createContext, useState } from 'react';

export const FlightContext = createContext(null);

export const FlightProvider = ({ children }) => {
  const [selectedCities, setSelectedCities] = useState({ originCity: '', destinationCity: '' });

  return (
    <FlightContext.Provider value={{ selectedCities, setSelectedCities }}>
      {children}
    </FlightContext.Provider>
  );
};