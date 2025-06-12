import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonsRow = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.row}>
      <button style={styles.btn} onClick={() => navigate('/login')}>Se connecter</button>
      <button style={styles.btn} onClick={() => navigate('/signup')}>Créer un compte</button>
    </div>
  );
};

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
