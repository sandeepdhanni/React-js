// // src/components/ProductCard.js
// import { useDispatch } from "react-redux";
// import React from "react";
// import { Card, Button } from "@mui/material";
// import { addItem } from "../redux/cartSlice";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addItem(product));
//   };

//   return (
//     <Card className="m-4 p-4 shadow-lg">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-40 object-cover"
//       />
//       <h2 className="text-lg font-bold">{product.title}</h2>
//       <p>{product.description}</p>
//       <p className="text-xl text-red-500">{product.price}</p>
//       <Button
//         className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
//         onClick={handleAddToCart} // Add onClick handler
//       >
//         Add to Cart
//       </Button>
//     </Card>
//   );
// };

// export default ProductCard;



import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from '@mui/material';
import { addItem } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Convert price to a number before dispatching
    const productWithNumericPrice = {
      ...product,
      price: parseFloat(product.price.replace('$', '')),
    };
    dispatch(addItem(productWithNumericPrice));
  };

  return (
    <Card className="m-4 p-4 shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="text-xl text-red-500">{product.price}</p>
      <Button
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;