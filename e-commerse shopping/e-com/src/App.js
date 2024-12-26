// src/App.js

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductCarousel from './components/Carousel';
import ProductCard from './components/ProductCard';
import { products } from './data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeProviderComponent, { useThemeContext } from './ThemeContext';
import './index.css'; // Import global styles

const AppContent = () => {
  const { toggleTheme } = useThemeContext();

  // Use effect to update body class based on theme
  useEffect(() => {
    const bodyClass = document.body.classList;
    bodyClass.toggle('dark', toggleTheme);
    bodyClass.toggle('light', !toggleTheme);
    
    // Cleanup function to remove classes on unmount
    return () => {
      bodyClass.remove('dark');
      bodyClass.remove('light');
    };
  }, [toggleTheme]);

  return (
    <div className="container mx-auto">
      <ProductCarousel />
      <h1 className="text-2xl font-bold my-4">Products</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProviderComponent>
        <Navbar />
        <AppContent />
        <Footer />
      </ThemeProviderComponent>
    </Provider>
  );
};

export default App;
