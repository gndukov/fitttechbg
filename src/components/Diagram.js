// components/Diagram.js
import React from 'react';

const Diagram = () => {
  return (
    <svg width="800" height="600">
      <rect x="50" y="50" width="700" height="500" fill="#f0f0f0" rx="10" />
      <circle cx="200" cy="200" r="50" fill="#007bff" />
      <circle cx="400" cy="200" r="50" fill="#007bff" />
      <circle cx="600" cy="200" r="50" fill="#007bff" />
      <line x1="200" y1="250" x2="400" y2="250" stroke="#333" strokeWidth="2" />
      <line x1="400" y1="250" x2="600" y2="250" stroke="#333" strokeWidth="2" />
      <text x="200" y="300" fill="#333" fontSize="24">Component 1</text>
      <text x="400" y="300" fill="#333" fontSize="24">Component 2</text>
      <text x="600" y="300" fill="#333" fontSize="24">Component 3</text>
    </svg>
  );
};

export default Diagram;