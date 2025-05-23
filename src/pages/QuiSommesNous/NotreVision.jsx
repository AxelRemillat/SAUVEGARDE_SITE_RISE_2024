import React from 'react';

const NotreVision = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Notre Vision</h2>
      <div style={styles.box}>
        <p>
          Nous sommes quatre étudiants de l'ESME Lyon, promotion 2027, et nous travaillons sur un projet destiné à accompagner les étudiants de notre école dans leur préparation au semestre international en quatrième année. Notre objectif principal est de faciliter l'accès à des informations précises sur les universités partenaires, en mettant à disposition une carte interactive regroupant ces établissements et toutes les données pertinentes pour chaque destination.
        </p>
        <p>
          Mais notre ambition ne s'arrête pas là : nous souhaitons aussi élargir ce projet en incluant une deuxième carte interactive, dédiée aux voyages personnels des étudiants. Cette carte, alimentée par les retours d'expériences des étudiants eux-mêmes, permettra de partager des conseils, des recommandations et des anecdotes utiles pour tout type de voyage à l'étranger, qu'il soit académique ou personnel.
        </p>
        <p>
          Ainsi, notre projet vise à créer une plateforme communautaire, accessible à tous, qui centralise des informations pratiques et enrichies par la participation des étudiants, afin de faciliter les mobilités internationales et les aventures personnelles.
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '80px 20px',
    backgroundColor: '#ECECEC',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    color: '#e40101',
    marginBottom: '60px',
    fontWeight: 'bold',
  },
  box: {
    padding: '30px',
    backgroundColor: '#ffffff',
    border: '5px solid #f0f0f0',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    margin: '0 auto',
    fontSize: '20px',
    lineHeight: '1.8',
    color: '#333',
    textAlign: 'justify',
  },
};

export default NotreVision;
