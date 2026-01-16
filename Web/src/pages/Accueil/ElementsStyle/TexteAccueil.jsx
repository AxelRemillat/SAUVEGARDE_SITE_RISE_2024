import React from 'react';

const TexteAccueil = () => {
  return (
    <div style={styles.container}>
      <div style={styles.block}>
        <h3 className="rise-mini-title" style={styles.title}>Objectif :</h3>
        <p className="rise-text" style={styles.paragraph}>
          <strong>RISE</strong> est une plateforme collaborative dédiée aux étudiants, offrant des informations
          précieuses sur votre semestre à l’international tout en vous faisant découvrir des lieux incontournables,
          soigneusement recommandés par vos camarades d’école ! C'est un gain de temps et d'argent important pour vous !
        </p>
      </div>

      <div style={styles.block}>
        <h3 className="rise-mini-title" style={styles.title}>Ce que tu peux trouver sur notre site :</h3>
        <p className="rise-text" style={styles.paragraph}>
          Une carte universitaire regroupant toutes les informations essentielles sur chaque université.
          Des témoignages authentiques d’étudiants ayant déjà vécu l’expérience dans ta destination.
          Une carte interactive qui te permet de partager ton avis sur tous les lieux que tu as visités.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: 'transparent', // ✅ Laisse le fond décidé par le style global
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginTop: '50px',
  },
  block: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '95%',
    width: '70%',
    margin: '0 auto',
  },
  title: {
    color: '#c42727',
    marginBottom: '15px',
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'justify',
  },
};

export default TexteAccueil;
