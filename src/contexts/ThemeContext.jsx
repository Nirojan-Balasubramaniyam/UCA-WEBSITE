import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isPinkTheme, setIsPinkTheme] = useState(false);

  useEffect(() => {
    // Update data-theme attribute - CSS will handle the color changes
    const root = document.documentElement;
    root.setAttribute('data-theme', isPinkTheme ? 'pink' : 'cyan');
  }, [isPinkTheme]);

  // Initialize on mount
  useEffect(() => {
    const root = document.documentElement;
    if (!root.hasAttribute('data-theme')) {
      root.setAttribute('data-theme', 'cyan');
    }
  }, []);

  const toggleTheme = () => {
    setIsPinkTheme(!isPinkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isPinkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

