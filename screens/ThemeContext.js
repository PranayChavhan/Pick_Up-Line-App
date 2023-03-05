import React, { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: 'white',
    textColor: 'black',
    placeholderTextColor: 'gray'
  });

  const toggleTheme = () => {
    const newTheme = theme.backgroundColor === 'white' ? {
      backgroundColor: 'black',
      textColor: 'white',
      placeholderTextColor: 'lightgray'
    } : {
      backgroundColor: 'white',
      textColor: 'black',
      placeholderTextColor: 'gray'
    };
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
