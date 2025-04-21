import React from 'react';
import Banner from "../components/StylePages/Banner"; // Assure-toi que le chemin est correct
import Fondateurs from '../pages/QuiSommesNous/FondateurCard';
import NotreVision from '../pages/QuiSommesNous/NotreVision'; // Assure-toi que le chemin est correct

const QuiSommesNous = () => {
  return (
    <div>
      <Banner text="Qui sommes-nous ?" />
      < Fondateurs />
        <NotreVision />
        {/* Ajoute ici d'autres composants ou éléments que tu souhaites afficher sur la page */}
        {/* Le contenu de la page ici */}
    </div>
  );
};

export default QuiSommesNous;
