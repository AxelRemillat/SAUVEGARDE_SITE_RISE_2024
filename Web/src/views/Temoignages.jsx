import React from 'react';
import Banner from "../components/StylePages/Banner";
import Temoignages from '../components/Temoignages/temoignagestempo'; // Grille de continents + témoignages

const PageTemoignages = () => {
  return (
    <div>
      <Banner text="Découvrez leurs aventures" />
      <Temoignages />
    </div>
  );
};

export default PageTemoignages;
