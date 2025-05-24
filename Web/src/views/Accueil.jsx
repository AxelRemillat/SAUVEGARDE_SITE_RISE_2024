import React from 'react';
import AccueilBanner from '../pages/Accueil/ElementsStyle/BANNER';
import AventureTitre from '../pages/Accueil/ElementsStyle/AventureTitre';
import InfoSection from '../pages/Accueil/InfoCartes/InfoSection';
import TexteAccueil from '../pages/Accueil/ElementsStyle/TexteAccueil';
import CarteUniHeader from '../pages/Accueil/ElementsStyle/CarteUniHeader';
import Onglets from '../pages/Accueil/Onglets/ONGLETS';
import CarteUni from '../components/CARTEUNI/CarteUni';
 // Chemin mis à jour

const Accueil = () => {
  return (
    <div>
      <AccueilBanner />
      <AventureTitre />
      <InfoSection />
      <TexteAccueil />
      <CarteUniHeader />
      <CarteUni /> {/* ✅ Voici la carte interactive */}

      {/* ✅ Voici la ligne qui appelle tout ce qu’il faut, y compris ContinentTabs */}
      <Onglets />
    </div>
  );
};

export default Accueil;
