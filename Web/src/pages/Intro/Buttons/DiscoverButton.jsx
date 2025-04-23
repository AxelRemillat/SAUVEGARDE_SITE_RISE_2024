// c'est le bouton decouvre rise


import React from 'react';

const DiscoverButton = ({ onClick }) => (
  <div style={{ marginBottom: '35px' }}>
    <button style={styles.btn} onClick={onClick}>
      Découvrir <span style={{ color: '#C62828' }}>RISE</span>
    </button>
  </div>
);

const styles = {
  btn: {
    backgroundColor: '#6a0dad',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default DiscoverButton;
