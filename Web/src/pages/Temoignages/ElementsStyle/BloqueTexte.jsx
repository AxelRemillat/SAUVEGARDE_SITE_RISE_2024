import React from 'react';
 
const TexteTemoignages = () => {
  return (
    <div style={styles.body}>
      {/* Images décoratives */}
      <div style={styles.image1}></div>
      <div style={styles.image2}></div>
 
      {/* Bloc texte */}
      <div style={styles.box}>
        <div className="flex justify-center px-4">
  <div className="bg-white rounded-2xl shadow-md p-6 max-w-4xl w-full">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Pars bien préparé grâce aux témoignages d’anciens étudiants !
    </h2>
    <p className="text-gray-700">
      Tu te demandes à quoi ressemble vraiment la vie sur place ? Où loger, quoi visiter, quoi emporter dans ta valise ?
      Les étudiants qui sont déjà partis partagent ici leurs meilleurs conseils, leurs galères, leurs coups de cœur et tous les petits secrets qui font la différence.
    </p>
    <p className="text-gray-700 mt-3">
      <span className="inline-block mr-2">💡</span>
      Astuces de voyage, bons plans logement, infos sur la vie locale, idées d’activités…
    </p>
    <p className="text-gray-700 mt-3">
      Ces témoignages sont là pour t’aider à te projeter et à vivre une expérience inoubliable.
      Jette-y un œil, tu y trouveras forcément des infos utiles (et parfois surprenantes) !
    </p>
  </div>
</div>
 
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
    maxWidth: '1050px', // ⬅️ was 900px, now slightly wider
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