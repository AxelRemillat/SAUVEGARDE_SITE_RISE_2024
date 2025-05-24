import React from 'react';

const TexteFlip = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Texte à gauche */}
        <div style={styles.textBox}>
          <h3 style={styles.title}>Explorez la Carte Communautaire</h3>
          <p style={styles.paragraph}>
            <strong>Connectez-vous :</strong> Accédez à un espace collaboratif où vous pouvez interagir avec d'autres membres, partager vos expériences et poser vos questions en toute simplicité.
          </p>
          <p style={styles.paragraph}>
            <strong>Visualisez :</strong> Découvrez les lieux, événements et recommandations directement sur notre carte interactive, adaptée à vos besoins.
          </p>
          <p style={styles.paragraph}>
            <strong>Partagez :</strong> Contribuez en ajoutant vos points d'intérêt ou en donnant vos avis pour enrichir la carte et aider les autres utilisateurs.
          </p>
        </div>

        {/* Carte à droite */}
        <div style={styles.cardContainer}>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-face front" />
              <div className="flip-face back" />
            </div>
          </div>
        </div>
      </div>

      {/* Flip animation styles */}
      <style>{`
        .flip-card {
          width: 100%;
          max-width: 400px;
          height: 400px;
          perspective: 1000px;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          backface-visibility: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          background-size: cover;
          background-position: center;
        }

        .front {
          background-image: url('https://primary.jwwb.nl/public/g/c/w/temp-pdlrlsxjwvkbgyallwla/screenshot-2024-12-14-210259-high-minask.png');
        }

        .back {
          background-image: url('https://primary.jwwb.nl/public/g/c/w/temp-pdlrlsxjwvkbgyallwla/terre-2-high-lvoe4z.png');
          transform: rotateY(180deg);
        }

        @media (max-width: 900px) {
          .responsive-container {
            flex-direction: column !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '60px 20px 20px',
    backgroundColor: '#ECECEC',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    gap: '60px',
    maxWidth: '1200px',
    width: '100%',
  },
  textBox: {
    flex: 1,
    maxWidth: '620px',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '3px solid #d8d8d8',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#204060',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  paragraph: {
    color: '#404040',
    fontSize: '20px',
    lineHeight: '1.8',
    textAlign: 'justify',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '12px',
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
};

export default TexteFlip;
