import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$99.99',
      description: 'High-quality wireless headphones with noise cancellation.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: '$699.99',
      description: 'Latest model smartphone with advanced features.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Laptop',
      price: '$999.99',
      description: 'Powerful laptop for work and entertainment.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: '$199.99',
      description: 'Stay connected and track your fitness.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Gaming Console',
      price: '$499.99',
      description: 'Next-gen gaming console for ultimate gaming experience.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Header />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
          <p className="mb-8">
            This is your e-commerce dashboard. Browse products, manage orders, and more!
          </p>

          {/* Products Section */}
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
                <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

