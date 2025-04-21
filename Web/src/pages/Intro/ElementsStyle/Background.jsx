import React from 'react';
import berlin from '../../../assets/ImagesAccueil_backup/BERLIN.avif';

const Background = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh', // ✅ Assure une hauteur visible
      backgroundImage: `url(${berlin})`,
      backgroundColor: '#e0e0e0', // ✅ Fallback en cas de bug image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)',
      transform: 'scale(1.1)',
      zIndex: 0, // ✅ Temporairement à 0 pour test de visibilité
    }}></div>
  );
};

export default Background;
