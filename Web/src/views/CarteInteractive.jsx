import React from 'react';
import Banner from "../components/StylePages/Banner";
import EnCoursDev from '../components/StylePages/EnCoursDev'; 
import TexteFlip from '../pages/CarteInteractive/ElementsStyle/TexteFlipcard';// Assure-toi que le chemin est correct

const CarteInteractive = () => {
  return (
    <div>
      <Banner text="Une carte communautaire !" />
      <EnCoursDev />
      <TexteFlip />
      {/* Ajoute ici d'autres composants ou éléments que tu souhaites afficher sur la page */}
        {/* Le contenu de la page ici */}
    </div>
  );
};

export default CarteInteractive;