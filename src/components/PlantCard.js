// PlantCard.js
import React, { useState } from "react";

function PlantCard({ plant, onSoldOut }) {
  const { id, name, image, price } = plant;
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOutClick() {
    setIsSoldOut(!isSoldOut);
    onSoldOut(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{isSoldOut ? "SOLD OUT" : `$${price}`}</p>
      <button onClick={handleSoldOutClick}>
        {isSoldOut ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;
