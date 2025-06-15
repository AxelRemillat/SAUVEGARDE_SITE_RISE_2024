import React from 'react';
import { Link } from 'react-router-dom';
import './InfoSection.css';

import explore from '../../../assets/ImagesAccueil_backup/EXPLORE.jpg';
import study from '../../../assets/ImagesAccueil_backup/STUDY.avif';
import inspire from '../../../assets/ImagesAccueil_backup/INSPIRE.jpg';

const InfoSection = () => {
  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <div className="info-section">
      <div className="info-card">
        <img src={explore} alt="Carte Universitaire" />
        <h3>CARTE UNIVERSITAIRE 🎓</h3>
        <p>Découvre toutes nos universités partenaires !</p>
        <Link to="/app/carte-universitaire" onClick={scrollTop}>
          <button>Juste ici</button>
        </Link>
      </div>

      <div className="info-card">
        <img src={inspire} alt="Témoignages" />
        <h3>TÉMOIGNAGES DES ÉTUDIANTS 🌞</h3>
        <p>Inspire-toi de ceux qui ont déjà vécu l'expérience !</p>
        <Link to="/app/temoignages" onClick={scrollTop}>
          <button>Juste ici</button>
        </Link>
      </div>

      <div className="info-card">
        <img src={study} alt="Carte Interactive" />
        <h3>CARTE INTERACTIVE 🌍</h3>
        <p>Partage ton avis sur les lieux que tu as visités !</p>
        <Link to="/app/carte-interactive" onClick={scrollTop}>
          <button>Juste ici</button>
        </Link>
      </div>
    </div>
  );
};

export default InfoSection;
