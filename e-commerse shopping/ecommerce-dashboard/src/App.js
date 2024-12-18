import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { toggleTheme } from './features/theme/themeSlice';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get current theme from Redux state

  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Toggle theme
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className={`${isDarkMode ? 'dark' : 'light'} min-h-screen`}>
        {/* Button to toggle theme */}
        <button
          onClick={handleThemeToggle}
          className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md"
        >
          Toggle Theme
        </button>

        {/* Dashboard component */}
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
