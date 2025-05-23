import React from 'react';
import Banner from "../components/StylePages/Banner";
import ContactDeuxCadrans from '../pages/NousContacter/ContactDeuxCadrans';// Assure-toi que le chemin est correct

const NousContacter = () => {
  return (
    <div>
      <Banner text="Contactez-nous" />
      <ContactDeuxCadrans /> {/* Inclure le composant ContactDeuxCadrans ici */}
        {/* Le contenu de la page ici */}
    </div>
  );
};

export default NousContacter;