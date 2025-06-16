import React from 'react';

const TropheeCard = ({ trophee, onSelect, isSelected }) => {
  return (
    <div
      className={`trophy ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(trophee)}
    >
      <img src={trophee.img} alt={trophee.title} />
      <h3>{trophee.title}</h3>
    </div>
  );
};

export default TropheeCard;
