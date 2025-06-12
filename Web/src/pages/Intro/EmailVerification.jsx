import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const EmailVerification = () => {
  const [codeInput, setCodeInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const handleVerify = async () => {
    const storedCode = sessionStorage.getItem('verificationCode');
    const storedEmail = sessionStorage.getItem('newUserEmail');

    if (!codeInput || codeInput.length !== 6) {
      setError('Veuillez entrer un code à 6 chiffres.');
      return;
    }

    if (!storedCode || !storedEmail) {
      setError("Données de vérification introuvables. Veuillez recommencer l'inscription.");
      return;
    }

    if (codeInput !== storedCode) {
      setError('Code incorrect. Veuillez réessayer.');
      return;
    }

    try {
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, where('email', '==', storedEmail));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setError('Utilisateur introuvable.');
        return;
      }

      const userDoc = snapshot.docs[0];
      await updateDoc(userDoc.ref, {
        verified: true,
        code: '',
      });

      // Nettoyage sessionStorage
      sessionStorage.removeItem('verificationCode');
      sessionStorage.removeItem('newUserEmail');

      // Redirection
      navigate('/login');
    } catch (err) {
      console.error('Erreur Firestore :', err);
      setError("Une erreur s'est produite. Merci de réessayer.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Vérification par email</h2>
      <p style={styles.text}>
        Veuillez entrer le code à 6 chiffres que vous avez reçu par email :
      </p>
      <input
        type="text"
        maxLength="6"
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        style={styles.input}
        placeholder="Code à 6 chiffres"
      />
      {error && <div style={styles.error}>{error}</div>}
      <button onClick={handleVerify} style={styles.button}>
        Valider
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    maxWidth: 400,
    margin: '80px auto',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#4b0082',
  },
  text: {
    fontSize: '15px',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#6a0dad',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  },
};

export default EmailVerification;
