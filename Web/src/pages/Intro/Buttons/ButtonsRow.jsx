// les deux autres boutons quil faudra programmer avec le backend



import React from 'react';

const ButtonsRow = ({ onClick }) => (
  <div style={styles.row}>
    <button style={styles.btn} onClick={onClick}>Se connecter</button>
    <button style={styles.btn} onClick={onClick}>Créer un compte</button>
  </div>
);

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '25px',
  },
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

export default ButtonsRow;


