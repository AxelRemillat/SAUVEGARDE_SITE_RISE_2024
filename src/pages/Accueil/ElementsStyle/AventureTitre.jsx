// texte rouge crée nton aventure à l'international
import React from 'react';

const AventureTitre = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      padding: '20px'
    },
    text: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 800,
      fontSize: '48px',
      color: '#c42727',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Prépare ton aventure à l'international</h2>
    </div>
  );
};

export default AventureTitre;

