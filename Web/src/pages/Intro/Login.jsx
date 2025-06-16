import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../authService.js';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [adminError, setAdminError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();
  const [hovered, setHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = '*Ce champ est obligatoire';
    if (!formData.password) newErrors.password = '*Ce champ est obligatoire';
    return newErrors;
  };

  const handleLogin = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const userCredential = await signIn(formData.email, formData.password);
      const user = userCredential.user;

      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const role = data.role || 'Utilisateur';
        console.log('Connexion réussie - rôle :', role);
      }

      sessionStorage.setItem('introSeen', 'true');
      navigate('/app');
    } catch (err) {
      const code = err.code;
      if (code === 'auth/user-not-found') {
        setErrors({ email: 'Adresse e-mail invalide ou introuvable' });
      } else if (code === 'auth/wrong-password') {
        setErrors({ password: 'Mot de passe incorrect' });
      } else {
        setErrors({ email: 'Erreur inconnue. Veuillez réessayer.' });
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.background}></div>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h2 style={styles.title}>
            Connexion à <span style={styles.rise}>RISE</span>
          </h2>

          <div style={styles.field}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}
          </div>

          <div style={styles.field}>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                autoComplete="new-password"
                inputMode="text"
              />
              <span onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            {errors.password && <div style={styles.error}>{errors.password}</div>}
          </div>

          <button onClick={handleLogin} style={styles.button}>
            Se connecter
          </button>

          <button

            onClick={() => setAdminMode(true)}
            style={{
              backgroundColor: '#c0392b', 
              color: 'white',
              padding: '8px 12px',
              fontSize: '14px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              width: '150px', 
              alignSelf: 'center'
            }}
          >       
            Compte Admin
          </button>
          {adminMode && (
            <>
              <input
                type="password"
                placeholder="Code admin (6 chiffres)"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                maxLength={6}
                style={styles.input}
              />
              {adminError && <div style={styles.error}>{adminError}</div>}
              <button
                style={{ ...styles.button, backgroundColor: '#6a0dad' }}
                onClick={() => {
                  if (adminCode === '654321') {
                    sessionStorage.setItem('introSeen', 'true'); 
                    navigate('/app');
                  } else {
                    setAdminError('Code incorrect.');
                  }
                }}
              >
                Valider code admin
              </button>
            </>
          )}

        </div>
      </div>
      <button
        onClick={() => navigate('/')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.backButton,
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          backgroundColor: hovered ? '#eee' : '#fff',
        }}
      >
        ← Retour
      </button>
    </div>
  );
};

const styles = {
  page: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  background: {
    backgroundImage: 'url("/src/assets/imageIntro_backup/BERLIN.avif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#4b0082',
    marginBottom: '10px',
  },
  rise: {
    color: '#c0392b',
    fontWeight: 'bold',
  },
  field: {
    position: 'relative',
    width: '100%',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
  },
  passwordWrapper: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '18px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'left',
    marginTop: '5px',
    marginLeft: '4px',
  },
  button: {
    backgroundColor: '#6a0dad',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

  backButton: {
  position: 'fixed',
  bottom: '25px',
  left: '25px',
  backgroundColor: '#fff',
  color: '#4b0082',
  border: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '12px 20px',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
  zIndex: 1000,
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  },
};

export default Login;
