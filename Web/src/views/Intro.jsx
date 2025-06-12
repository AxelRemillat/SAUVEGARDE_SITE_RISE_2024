import React from 'react';

// 🔁 Plus besoin de useNavigate ici
import Background from '../pages/Intro/ElementsStyle/Background';
import MainBox from '../pages/Intro/ElementsStyle/MainBox'; // ✅ Assure-toi que ce fichier reçoit bien les props

const Intro = () => {
  return (
    <div style={styles.body}>
      <Background />
      <MainBox />
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
