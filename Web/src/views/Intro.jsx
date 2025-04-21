import React from 'react';
import { useNavigate } from 'react-router-dom';

// Imports des éléments visuels depuis ton arborescence
import Background from '../pages/Intro/ElementsStyle/Background';
import MainBox from '../pages/Intro/ElementsStyle/MainBox'; // Assure-toi que le chemin est correct

const Intro = () => {
  const navigate = useNavigate();

  const redirect = () => {
    // ✅ On enregistre que l'utilisateur est passé par l'intro
    sessionStorage.setItem('introSeen', 'true');
    navigate('/app'); // Redirection vers le layout principal
  };

  return (
    <div style={styles.body}>
      <Background />
      <MainBox onRedirect={redirect} />
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
