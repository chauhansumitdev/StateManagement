// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value (light theme)
const ThemeContext = createContext('light');

// Create a provider component to wrap the part of the tree that needs access to the theme
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
