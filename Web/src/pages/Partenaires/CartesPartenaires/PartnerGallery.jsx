// Composant principal qui affiche toutes les cartes partenaires et les détails.
// Gère la sélection et l'affichage des détails.
import React, { useState } from 'react';

import PartnerCard from './PartnerCard';
import PartnerDetails from './PartnerDetails';
import partnerData from './partnerData';

const PartnerGallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setTimeout(() => {
        document.getElementById('partner-details').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <div className="partner-gallery">
        {Object.entries(partnerData).map(([id, data]) => (
          <PartnerCard 
            key={id}
            id={id}
            imgSrc={data.imgSrc}
            name={data.title}
            onClick={handleSelect}
            isSelected={selectedId === id}
          />
        ))}
      </div>

      <div id="partner-details">
        {selectedId && 
          <PartnerDetails 
            title={partnerData[selectedId].title}
            description={partnerData[selectedId].description}
          />
        }
      </div>
    </>
  );
};

export default PartnerGallery;

