import React, { useState, createContext } from 'react';

export const KanaContext = createContext({
  toggleKana: () => {},
  hiraganaSelected: true,
});

const KanaProvider = ({ children }) => {
  const [hiraganaSelected, setHiraganaSelected] = useState(true);
  const toggleKana = () => {
    setHiraganaSelected(old => !old);
  };

  return (
    <KanaContext.Provider value={{ toggleKana, hiraganaSelected }}>
      {children}
    </KanaContext.Provider>
  );
};

export default KanaProvider;
