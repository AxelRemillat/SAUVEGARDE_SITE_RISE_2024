import React from 'react';
import Banner from "../components/StylePages/Banner";
import Temoignages from '../components/Temoignages/temoignagestempo'; // Le composant carrousel
import TitreHistoires from '../pages/Temoignages/ElementsStyle/TitreHistoires';
import TexteTemoignages from '../pages/Temoignages/ElementsStyle/BloqueTexte';


const PageTemoignages = () => {
  return (
    <div>
      <Banner text="Découvrez leurs aventures" />
      <TitreHistoires />
      <TexteTemoignages />
      <Temoignages />
    </div>
  );
};

export default PageTemoignages;
