// Assemble la page Partenaires complète : bannière, fond, logo, texte, galerie
import React from 'react';
import Banner from '../components/StylePages/Banner';
import PartenaireTexte from '../pages/Partenaires/ElementsStyle/PartenaireTexte';



import PartnerGallery from '../pages/Partenaires/CartesPartenaires/PartnerGallery';
import '../pages/Partenaires/CartesPartenaires/Partenaires.css';

const Partenaires = () => {
  return (
    <>
      <Banner text="Nos partenaires" />
      
      <div className="background"></div>

      <img 
        src="https://tourduvalat.org/wp-content/uploads/2017/11/Partner-icon.png" 
        alt="Partenariat" 
        className="partnership-logo" 
      />

      <PartenaireTexte />
      
      <PartnerGallery />
    </>
  );
};

export default Partenaires;
