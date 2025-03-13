// ThemeToggle.js
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user previously selected a theme
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Apply the theme to the body when component mounts or theme changes
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;