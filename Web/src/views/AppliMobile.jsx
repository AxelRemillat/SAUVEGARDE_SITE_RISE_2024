import React from 'react';
import Banner from "../components/StylePages/Banner";
import EnCoursDev from '../components/StylePages/EnCoursDev'; 
import TexteImage from '../pages/AppliMobile/ElementsStyle/TexteImage';// Assure-toi que le chemin est correct

const AppliMobile = () => {
  return (
    <div>
      <Banner text="l’aventure dans ta poche !" />
      <EnCoursDev />
        <TexteImage />
        {/* Le contenu de la page ici */}
    </div>
  );
};

export default AppliMobile;