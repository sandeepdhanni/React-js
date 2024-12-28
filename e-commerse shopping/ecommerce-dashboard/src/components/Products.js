import React from 'react';
import ProductTable from './ProductTable';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductTable />
      <ProductCard />
    </div>
  );
};

export default Products; 