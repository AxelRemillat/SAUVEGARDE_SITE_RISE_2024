import React from 'react';
import logo from '../../../assets/ImagesAccueil_backup/logo.png';

const LogoFixed = () => {
  return (
    <img
      src={logo}
      alt="Logo RISE"
      style={styles.logo}
    />
  );
};

const styles = {
  logo: {
    position: 'fixed',
    top: '-20px',
    left: '-10px',     
    height: '150px',
    zIndex: 10,
    opacity: 0.95,
  },
};

export default LogoFixed;
