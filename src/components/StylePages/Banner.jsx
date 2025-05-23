// ce code la genere la banière présente sur toutes les pages hors page d'accueil
// il est appelé dans chaque page ou l'on a modifié le texte


import React from 'react';
import fond1 from '../../assets/ImagesAccueil_backup/fond1.png'; // Chemin adapté selon l’endroit du fichier Banner.jsx

const Banner = ({ text }) => {
  const bannerStyle = {
    width: '100vw',
    margin: 0,
    padding: 0,
    backgroundImage: `url(${fond1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: '3.5em',
    fontWeight: 'bold',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-in-out'
  };

  const textStyle = {
    display: 'inline-block',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: 'white',
    whiteSpace: 'nowrap',
    animation: 'scroll-to-center 2.5s ease-in-out forwards',
  };

  const highlightStyle = {
    display: 'inline-block',
    animation: 'colorChange 1.5s ease-in forwards',
    animationDelay: '2.5s'
  };

  return (
    <>
      <style>{`
        @keyframes scroll-to-center {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes colorChange {
          0% {
            color: #f9f9f9;
            text-shadow: none;
          }
          50% {
            color: #f08a5d;
            text-shadow: 0 0 8px rgba(240, 138, 93, 0.5);
          }
          100% {
            color: #e63946;
            text-shadow: 0 0 10px rgba(230, 57, 70, 0.7);
          }
        }
      `}</style>

      <div style={bannerStyle}>
        <div style={textStyle}>
          <span style={highlightStyle}>RISE</span>: {text}
        </div>
      </div>
    </>
  );
};

export default Banner;
