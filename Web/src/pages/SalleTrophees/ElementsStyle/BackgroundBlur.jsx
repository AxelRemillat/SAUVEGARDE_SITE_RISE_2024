import React from 'react';
import berlinImg from '../../../assets/ImagesAccueil_backup/BERLIN2.avif';

const BackgroundBlur = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${berlinImg})`,
        backgroundSize: '200%',         // 📌 énorme zoom
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(10px)',           // un peu plus de flou si tu veux
        zIndex: -1,
        pointerEvents: 'none',
        backgroundAttachment: 'fixed',  // fond fixé
      }}
    />
  );
};

export default BackgroundBlur;
