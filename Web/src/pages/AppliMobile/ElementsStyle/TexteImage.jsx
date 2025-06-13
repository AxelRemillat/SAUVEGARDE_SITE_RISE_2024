import React from 'react';

const TexteImage = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Texte à gauche */}
        <div style={styles.textBox}>
          <h3 style={styles.title}>Découvrez l'application mobile</h3>
          <p style={styles.paragraph}>
            <strong>Interactivité :</strong> Partagez vos avis et découvrez les recommandations de vos pairs grâce à une carte interactive intuitive, le tout depuis votre appareil mobile.
          </p>
          <p style={styles.paragraph}>
            <strong>Accessibilité :</strong> Accédez à des informations actualisées sur les universités et les témoignages d'étudiants, où que vous soyez et à tout moment, directement depuis votre smartphone, sans nécessiter l'utilisation d'un ordinateur.
          </p>
          <p style={styles.paragraph}>
            <strong>Simplicité :</strong> Profitez d'une interface intuitive et facile à naviguer, rendant la recherche d'informations et la contribution plus agréables.
          </p>
        </div>

        {/* Image à droite */}
        <img
          src="https://primary.jwwb.nl/public/g/c/w/temp-pdlrlsxjwvkbgyallwla/risemobile-high.webp?enable-io=true&fit=cover&width=400&height=400"
          alt="Illustration de l'application mobile"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '60px 20px 20px',
    backgroundColor: 'transparent', // ✅ Laisse le fond décidé par le style global
  },
  container: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    width: '100%',
    gap: '60px',
  },
  textBox: {
    padding: '30px',
    backgroundColor: '#ffffff',
    border: '3px solid #f0f0f0',
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '650px',
    flex: 1,
    textAlign: 'left',
  },
  title: {
    color: '#204060',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#404040',
    fontSize: '18px',
    lineHeight: '1.8',
    textAlign: 'justify',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '18px',
  },
  image: {
    maxWidth: '450px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    alignSelf: 'center',
    flexShrink: 0,
  },
};

export default TexteImage;
