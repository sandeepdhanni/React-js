// src/components/ProductCard.js

import React from 'react';
import { Card } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card className="m-4 p-4 shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-xl text-red-500">{product.price}</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
        </Card>
    );
};

export default ProductCard;
