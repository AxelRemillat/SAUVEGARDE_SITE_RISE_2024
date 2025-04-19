import React from 'react';
import AccueilBanner from '../pages/Accueil/BANNER';
import AventureTitre from '../pages/Accueil/AventureTitre';
import InfoSection from '../pages/Accueil/InfoCartes/InfoSection';
import TexteAccueil from '../pages/Accueil/TexteAccueil';
import CarteUniHeader from '../pages/Accueil/CarteUniHeader';

// import Onglets from '../components/ONGLETS'; 
const Accueil = () => {
  return (
    <div>
      <AccueilBanner />
      <AventureTitre />
      <InfoSection />
      <TexteAccueil />
      <CarteUniHeader />
      //  {/*enlever le commentaire pour réactier onglets <Onglets /> */} 
    </div>
  );
};

export default Accueil;
