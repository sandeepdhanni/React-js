import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import { toggleTheme } from './features/theme/themeSlice';
import MainLayout from './MainLayout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <div className={`${isDarkMode ? 'dark' : 'light'} min-h-screen`}>
          <button
            onClick={handleThemeToggle}
            className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md"
          >
            Toggle Theme
          </button>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </MainLayout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
