import React from 'react';
import './InfoSection.css';

import explore from '../../../assets/ImagesAccueil_backup/EXPLORE.jpg';
import study from '../../../assets/ImagesAccueil_backup/STUDY.avif';
import inspire from '../../../assets/ImagesAccueil_backup/INSPIRE.jpg';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-card">
        <img src={explore} alt="Carte Universitaire" />
        <h3>CARTE UNIVERSITAIRE 🎓</h3>
        <p>Découvre toutes nos universités partenaires !</p>
        <button>Juste ici</button>
      </div>

      <div className="info-card">
        <img src={inspire} alt="Témoignages" />
        <h3>TÉMOIGNAGES DES ÉTUDIANTS 🌞</h3>
        <p>Inspire-toi de ceux qui ont déjà vécu l'expérience !</p>
        <button>Juste ici</button>
      </div>

      <div className="info-card">
        <img src={study} alt="Carte Interactive" />
        <h3>CARTE INTERACTIVE 🌍</h3>
        <p>Partage ton avis sur les lieux que tu as visités !</p>
        <button>Juste ici</button>
      </div>
    </div>
  );
};

export default InfoSection;
