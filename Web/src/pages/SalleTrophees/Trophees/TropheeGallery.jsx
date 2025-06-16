import React, { useState } from 'react';
import TropheeCard from './TropheeCard';
import tropheeData from './tropheeData';
import './Trophees.css';

const TropheeGallery = () => {
  const [selectedTrophee, setSelectedTrophee] = useState(null);

  const handleSelect = (trophee) => {
    setSelectedTrophee(selectedTrophee?.id === trophee.id ? null : trophee);
  };

  return (
    <>
      <div className="trophy-gallery">
        {tropheeData.map(trophee => (
          <TropheeCard
            key={trophee.id}
            trophee={trophee}
            onSelect={handleSelect}
            isSelected={selectedTrophee?.id === trophee.id}
          />
        ))}
      </div>

      {selectedTrophee && (
        <div className="details">
          <h2>{selectedTrophee.title}</h2>
          <p>{selectedTrophee.description}</p>
        </div>
      )}
    </>
  );
};

export default TropheeGallery;
