import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [ darkMode, setDarkMode ] = useState(false);
  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode
    localStorage.setItem('darkMode', updatedDarkMode)
    setDarkMode(updatedDarkMode);
  }

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

