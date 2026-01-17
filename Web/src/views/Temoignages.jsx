import React from 'react';
import Banner from "../components/StylePages/Banner";
import Temoignages from '../components/Temoignages/temoignagestempo'; // Le composant carrousel

import TexteTemoignages from '../pages/Temoignages/ElementsStyle/BloqueTexte';


const PageTemoignages = () => {
  return (
    <div>
      <Banner text="Découvrez leurs aventures" />
      <TexteTemoignages />
      <Temoignages />
    </div>
  );
};

export default PageTemoignages;
