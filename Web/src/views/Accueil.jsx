import React from 'react';
import AccueilBanner from '../pages/Accueil/ElementsStyle/BANNER';
import AventureTitre from '../pages/Accueil/ElementsStyle/AventureTitre';
import InfoSection from '../pages/Accueil/InfoCartes/InfoSection';
import TexteAccueil from '../pages/Accueil/ElementsStyle/TexteAccueil';


const Accueil = () => {
  return (
    <div>
      <AccueilBanner />
      <AventureTitre />
      <InfoSection />
      <TexteAccueil />
    </div>
  );
};

export default Accueil;
