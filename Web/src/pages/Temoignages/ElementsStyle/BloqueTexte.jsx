import React from 'react';

const TexteTemoignages = () => {
  return (
    <div style={styles.body}>
      {/* Images décoratives */}
      <div style={styles.image1}></div>
      <div style={styles.image2}></div>

      {/* Bloc texte */}
      <div style={styles.box}>
        <b>
          Découvrez les récits captivants de nos étudiants qui explorent les
          quatre coins du monde ! De l'Asie à l'Amérique du Sud, laissez-vous
          inspirer par leurs aventures, conseils, et moments inoubliables.
          Chaque témoignage est une invitation à plonger dans une nouvelle
          culture, à goûter de nouvelles saveurs et à vivre des expériences
          uniques à travers leurs yeux. Que vous soyez en quête d'idées pour
          votre prochaine destination ou simplement curieux de découvrir la vie
          d'étudiant à l'étranger, parcourez ces histoires authentiques et
          plongez dans le quotidien de ceux qui ont osé partir à l'aventure.
        </b>
      </div>

      {/* Décoration vague */}
      <div style={styles.bottomDeco}></div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent', // ✅ Laisse index.css décider du fond
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 0,
    overflowX: 'hidden',
  },

  image1: {
    position: 'absolute',
    width: '40%',
    height: '40vh',
    backgroundImage:
      "url('https://primary.jwwb.nl/public/g/c/w/temp-pdlrlsxjwvkbgyallwla/capture_d_-cran_2025-01-12_214534-removebg-preview-high.png')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top: '100px',
    left: '30px',
    zIndex: -1,
    transform: 'rotate(10deg)',
  },

  image2: {
    position: 'absolute',
    width: '40%',
    height: '40vh',
    backgroundImage:
      "url('https://primary.jwwb.nl/public/g/c/w/temp-pdlrlsxjwvkbgyallwla/capture_d_-cran_2025-01-12_214534-removebg-preview-high.png')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top: '100px',
    right: '0',
    zIndex: -1,
    transform: 'rotate(-15deg)',
  },

  box: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '30px',
    backgroundColor: '#ffffff',
    fontSize: '20px',
    lineHeight: 1.7,
    color: '#333',
    maxWidth: '900px',
    margin: '100px auto 0px auto',
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.1)',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s, box-shadow 0.3s',
  },

  bottomDeco: {
    width: '100%',
    height: '200px',
    backgroundImage: "url('images page temoignage/téléchargement_vague.png')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    marginTop: '40px',
  },
};

export default TexteTemoignages;
