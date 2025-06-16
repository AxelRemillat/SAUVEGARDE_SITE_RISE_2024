// potentiellement faire un fichier pour les titres css en commun 



import React from 'react';
import leonie from '../../assets/ImagesAccueil_backup/Leonie.png';
import mathis from '../../assets/ImagesAccueil_backup/Mathis.png';
import axel from '../../assets/ImagesAccueil_backup/Axel.png';
import tanguy from '../../assets/ImagesAccueil_backup/Tanguy.png';

const FondateurCard = ({ image, nom, role, linkedin }) => {
  return (
    <div style={styles.card}>
      <div style={styles.inner} className="card-inner">
        <div style={{ ...styles.face, ...styles.front }}>
          <img src={image} alt={nom} style={styles.img} />
        </div>
        <div style={{ ...styles.face, ...styles.back }}>
          <p>{role}</p>
        </div>
      </div>
      <div style={styles.name}>{nom}</div>
      <a href={linkedin} target="_blank" rel="noreferrer" style={styles.link}>Voir sur LinkedIn</a>

      <style>{`
        .card-inner:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

const Fondateurs = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>4 Fondateurs :</h2>
      <div style={styles.grid}>
        <FondateurCard
          image={mathis}
          nom="Levrot Mathis"
          role="Développeur web et designer, codeur"
          linkedin="https://linkedin.com/in/mathis-levrot-ba2110252/"
        />
       
        <FondateurCard
          image={axel}
          nom="Remillat Axel"
          role="Développeur de la carte universitaire, codeur et designer"
          linkedin="https://linkedin.com/in/axel-remillatesmelyon"
        />
         <FondateurCard
          image={leonie}
          nom="Schmit Léonie"
          role="Fondatrice, responsable du projet et stratégie"
          linkedin="https://linkedin.com/in/leonie-schmit-7248b5259"
        />
        <FondateurCard
          image={tanguy}
          nom="Roux Tanguy"
          role="Responsable financier et business"
          linkedin="https://linkedin.com/in/roux-tanguy"
        />
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#ECECEC',
    padding: '60px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#e40101',
    marginBottom: '60px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
  },
  card: {
    width: '250px',
    height: '300px',
    perspective: '1000px',
    textAlign: 'center',
    margin: '10px',
  },
  inner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s',
  },
  face: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  front: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    backgroundColor: '#333',
    color: '#fff',
    transform: 'rotateY(180deg)',
    padding: '10px',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  name: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#c00',
  },
  link: {
    fontSize: '14px',
    color: '#0077b5',
    textDecoration: 'none',
  },
};

export default Fondateurs;
