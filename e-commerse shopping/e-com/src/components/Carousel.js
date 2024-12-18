// src/components/Carousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = () => {
  // Static image URLs for the carousel
  const carouselImages = [
    "https://static.wixstatic.com/media/84770f_4818548c8fc44e9da1a98f2bef4486b7~mv2.jpg/v1/fill/w_979,h_380,fp_0.5_0.4,q_90/84770f_4818548c8fc44e9da1a98f2bef4486b7~mv2.jpg",
    "https://static.wixstatic.com/media/84770f_b280c3fc0a5f405d9aa1f2c4e1bbeefc~mv2.jpg/v1/fill/w_979,h_380,fp_0.71_0.32,q_90/84770f_b280c3fc0a5f405d9aa1f2c4e1bbeefc~mv2.jpg",
    "https://static.wixstatic.com/media/84770f_ee61a8e9c2e943eda07810d4fae05849~mv2.jpg/v1/fill/w_979,h_380,fp_0.57_0.54,q_90/84770f_ee61a8e9c2e943eda07810d4fae05849~mv2.jpg",
  ];

  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      {carouselImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
