// Composant qui affiche une carte partenaire : image + titre.
// Gère le style si sélectionné.

import React from 'react';

const PartnerCard = ({ id, imgSrc, name, onClick, isSelected }) => {
  return (
    <div 
      className={`partner ${isSelected ? 'selected' : ''}`} 
      onClick={() => onClick(id)}
    >
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PartnerCard;
