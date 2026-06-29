import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleBlock from './TitleBlock';

const ADMIN_PASSWORD = 'RatelRatel1';

const MainBox = () => {
  const navigate = useNavigate();
  const [adminMode, setAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  const enterApp = (role) => {
    sessionStorage.setItem('introSeen', 'true');
    sessionStorage.setItem('role', role);
    navigate('/app');
  };

  const handleAdminValidate = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      enterApp('admin');
    } else {
      setAdminError('Mot de passe incorrect.');
    }
  };

  return (
    <div style={styles.container}>
      <TitleBlock />

      <div style={styles.row}>
        <button style={styles.btn} onClick={() => enterApp('invite')}>
          Se connecter en tant qu'invité
        </button>
        <button
          style={styles.btn}
          onClick={() => {
            setAdminMode(true);
            setAdminError('');
          }}
        >
          Compte admin
        </button>
      </div>

      {adminMode && (
        <div style={styles.adminBlock}>
          <input
            type="password"
            placeholder="Mot de passe admin"
            value={adminPassword}
            onChange={(e) => {
              setAdminPassword(e.target.value);
              setAdminError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleAdminValidate()}
            style={styles.input}
            autoFocus
          />
          {adminError && <div style={styles.error}>{adminError}</div>}
          <button style={styles.btn} onClick={handleAdminValidate}>
            Valider
          </button>
        </div>
      )}
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
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '10px',
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
  adminBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginTop: '25px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    maxWidth: '280px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default MainBox;
