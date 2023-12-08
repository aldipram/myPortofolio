import React, { createContext, useContext, useState, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const handleTheme = useCallback(() => {
    if (!isThemeChanging) {
      setIsThemeChanging(true);

      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

      setTimeout(() => {
        setIsThemeChanging(false);
      }, 10);
    }
  }, [isThemeChanging, setTheme]);

  const value = {
    theme,
    handleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
