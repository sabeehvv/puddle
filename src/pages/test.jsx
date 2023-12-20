import React from 'react';

const Triangle = () => {
  const triangleCoordinates = "1051.87,575.21 908.52,644.14 1044.21,758.91";

  return (
    <svg width="1200" height="1000" xmlns="http://www.w3.org/2000/svg">
      <path d="M1051.87 575.21 L908.52 644.14 L1044.21 758.91 Z" fill="#yourColor" />
    </svg>
  );
};

export default Triangle;