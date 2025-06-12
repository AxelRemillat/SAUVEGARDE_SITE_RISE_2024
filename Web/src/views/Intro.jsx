import React from 'react';

// ✅ Plus besoin de useNavigate ici
import Background from '../pages/Intro/ElementsStyle/Background';
import MainBox from '../pages/Intro/ElementsStyle/MainBox';
import LogoFixed from '../pages/Intro/ElementsStyle/LogoFixed';

const Intro = () => {
  const redirect = () => {
    // si ce callback est utile à MainBox
  };

  return (
    <div style={styles.body}>
      <Background />
      <MainBox onRedirect={redirect} />
      <LogoFixed />
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fff',
  },
};

export default Intro;