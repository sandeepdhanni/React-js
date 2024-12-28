import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { deleteProduct } from '../features/products/productSlice';
import {setSelectedProduct} from '../features/products/selectedProductSlice';

const ProductTable = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleSelectProduct = (product) => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} onClick={() => handleSelectProduct(product)} className="cursor-pointer">
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.type}</td>
              <td className="border p-2">
                <Button variant="contained" color="secondary" className="mr-2">
                  Edit
                </Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
