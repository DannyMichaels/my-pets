import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const PetsContext = createContext();

export default function PetsProvider({ children }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const petsData = [
      {
        name: 'jeffrey',
        type: 'cat',
      },
      { name: 'doggy', type: 'dog' },
    ];

    setPets(petsData);
  }, []);

  return (
    <PetsContext.Provider value={[pets, setPets]}>
      {children}
    </PetsContext.Provider>
  );
}
