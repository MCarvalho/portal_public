import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState('normal');

  const increaseFont = () =>
    setFontSize((prev) => (prev < 28 ? prev + 2 : prev));

  const decreaseFont = () =>
    setFontSize((prev) => (prev > 16 ? prev - 2 : prev));

  const toggleContrast = () =>
    setContrast((prev) => (prev === 'normal' ? 'high' : 'normal'));

  return (
    <ThemeContext.Provider
      value={{ fontSize, contrast, increaseFont, decreaseFont, toggleContrast }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
