// src/components/Card.js
import React from 'react';

function Card({ title, description }) {
  return (
    <div className="card bg-darkBackground text-lightGray p-6 rounded-lg shadow-lg hover:border-cyanBlue hover:border-s-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
