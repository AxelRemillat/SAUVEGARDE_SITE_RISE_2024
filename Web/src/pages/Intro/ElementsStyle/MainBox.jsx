import React from 'react';
import TitleBlock from './TitleBlock';
import ButtonsRow from '../Buttons/ButtonsRow';
import DiscoverButton from '../Buttons/DiscoverButton';
import PremiumLink from '../Buttons/PremiumLink';


const MainBox = ({ onRedirect }) => {
  return (
    <div style={styles.container}>
      <TitleBlock />
      <ButtonsRow onClick={onRedirect} />
      <DiscoverButton onClick={onRedirect} />
      <PremiumLink />
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.85)',
    padding: '40px 30px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    width: '80%',
    maxWidth: '600px',
    margin: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

export default MainBox;
