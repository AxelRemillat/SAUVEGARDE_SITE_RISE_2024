// Composant qui affiche les détails du partenaire sélectionné : titre + description.

import React from 'react';

const PartnerDetails = ({ title, description }) => {
  if (!title) return null;

  return (
    <div className="details">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PartnerDetails;
