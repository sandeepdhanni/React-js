import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedProduct } from '../features/products/selectedProductSlice';

const ProductCard = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct.selectedProduct);
  const dispatch = useDispatch();

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-40 object-cover rounded-lg mb-4" />
        <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProduct.description}</p>
        <p className="text-lg font-bold mb-4">${selectedProduct.price}</p>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => dispatch(clearSelectedProduct())}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductCard;