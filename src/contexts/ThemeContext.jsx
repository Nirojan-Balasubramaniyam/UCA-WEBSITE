import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const themes = ['cyan', 'pink', 'grey'];

export const ThemeProvider = ({ children }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    // Update data-theme attribute - CSS will handle the color changes
    const root = document.documentElement;
    root.setAttribute('data-theme', themes[currentThemeIndex]);
  }, [currentThemeIndex]);

  // Initialize on mount
  useEffect(() => {
    const root = document.documentElement;
    if (!root.hasAttribute('data-theme')) {
      root.setAttribute('data-theme', 'cyan');
    }
  }, []);

  const toggleTheme = () => {
    setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

