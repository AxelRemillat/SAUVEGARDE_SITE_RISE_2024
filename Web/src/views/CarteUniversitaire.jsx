import React from 'react';
import Banner from "../components/StylePages/Banner";
import CarteUniHeader from '../pages/CarteUniversitaire/ElementsStyle/CarteUniHeader';
import CarteUni from '../pages/CarteUniversitaire/CARTEUNI/CarteUni';
import Onglets from '../pages/CarteUniversitaire/Onglets/ONGLETS';

const CarteUniversitaire = () => {
  return (
    <div>
      <Banner text="Vos Universités partenaires" />
      <CarteUniHeader />
      <CarteUni />
      <Onglets />
    </div>
  );
};

export default CarteUniversitaire;
