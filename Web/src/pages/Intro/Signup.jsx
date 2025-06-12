import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../authService.js';
import axios from 'axios';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import backgroundImage from '../../assets/imageIntro_backup/BERLIN.avif';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    prenom: '',
    nom: '',
    age: '',
    ville: '',
    pays: '',
    telephone: '',
  });

  const [errors, setErrors] = useState({});
  const [villeOptions, setVilleOptions] = useState([]);
  const [villeValid, setVilleValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [paysOptions, setPaysOptions] = useState([]);
  const [paysValid, setPaysValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));

    if (name === 'ville') {
      setVilleValid(false);
      if (value.length >= 2) {
        try {
          const res = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${value}&type=municipality`);
          setVilleOptions(res.data.features.map((f) => f.properties.label));
        } catch (err) {
          console.error('Erreur API ville :', err);
        }
      } else {
        setVilleOptions([]);
      }
    }
  if (name === 'pays') {
    setPaysValid(false);
    if (value.length >= 2) {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${value}`);
        setPaysOptions(res.data.map((c) => c.name.common));
      } catch (err) {
        console.error('Erreur API pays :', err);
        setPaysOptions([]);
      }
    } else {
      setPaysOptions([]);
    }
  }


  };

  const handleVilleSelect = (ville) => {
    setFormData((prev) => ({ ...prev, ville }));
    setVilleValid(true);
    setVilleOptions([]);
    setErrors((prev) => ({ ...prev, ville: '' }));
  };
  const handlePaysSelect = (pays) => {
    setFormData((prev) => ({ ...prev, pays }));
    setPaysValid(true);
    setPaysOptions([]);
    setErrors((prev) => ({ ...prev, pays: '' }));
  };
  const isValidPassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!?+_#\-]).{8,}$/;
    return regex.test(pwd);
  };

  const validateFields = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) newErrors[key] = '*Ce champ est obligatoire';
    }

    if (formData.password && !isValidPassword(formData.password)) {
      newErrors.password = 'Mot de passe trop faible. Minimum 8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial (!?+_#-)';
    }

    if (formData.telephone && !/^0\d{9}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Numéro invalide. Format attendu : 0xxxxxxxxx';
    }

    if (!villeValid) {
      newErrors.ville = 'Veuillez sélectionner une ville valide dans la liste proposée';
    }

    if (formData.age && (!/^\d+$/.test(formData.age) || formData.age < 0 || formData.age > 99)) {
      newErrors.age = 'Âge invalide. Entrez un nombre entre 0 et 99';
    }

    return newErrors;
  };

  const handleSignup = async () => {
  const fieldErrors = validateFields();
  if (Object.keys(fieldErrors).length > 0) {
    setErrors(fieldErrors);
    return;
  }

  if (!paysValid) {
    newErrors.pays = 'Veuillez sélectionner un pays valide dans la liste proposée';
  }
  const { email, password, ...otherInfos } = formData;
  const formattedInfos = {
    ...otherInfos,
    age: Math.min(Math.max(0, parseInt(otherInfos.age, 10) || 0), 99),
  };

  try {
    // 1. Création de compte Firebase Auth
    const { userCredential, verificationCode } = await signUp(email, password, formattedInfos);
    if (!userCredential || !userCredential.user) {
      throw new Error("Création utilisateur échouée");
    }

    const uid = userCredential.user.uid;      


    // 3. Ajouter le code à l'utilisateur en Firestore
    const db = getFirestore();
    await updateDoc(doc(db, 'Users', uid), {
      code: verificationCode,
      verified: false,
    });

    // 4. Envoi email avec le code généré par `authService`
    await axios.post(
      'https://us-central1-rise-connect-8407a.cloudfunctions.net/sendEmailCode',
      { email, code: verificationCode },
      { headers: { 'Content-Type': 'application/json' } }
    );

    // 5. Stockage local temporaire pour vérification
    sessionStorage.setItem('verificationCode', verificationCode);
    sessionStorage.setItem('newUserEmail', email);
    sessionStorage.setItem('newUserUid', uid);

    // 6. Redirection
    navigate('/verify');
  } catch (err) {
    console.error('Erreur création ou envoi :', err);
    setErrors({
      email: 'Adresse invalide ou déjà utilisée',
      password: 'Mot de passe requis ou invalide',
    });
  }
};

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={{ color: '#4b0082', fontWeight: 'bold' }}>Créer un compte</span>{' '}
          <span style={{ color: '#c0392b', fontWeight: 'bold' }}>RISE</span>
        </h2>
        {[
          { name: 'email', type: 'email', placeholder: 'Email' },
          { name: 'password', type: showPassword ? 'text' : 'password', placeholder: 'Mot de passe' },
          { name: 'prenom', placeholder: 'Prénom' },
          { name: 'nom', placeholder: 'Nom' },
          { name: 'age', type: 'number', placeholder: 'Âge' },
          { name: 'ville', placeholder: 'Ville' },
          { name: 'pays', placeholder: 'Pays' },
          { name: 'telephone', placeholder: 'Téléphone' },
        ].map(({ name, placeholder, type = 'text' }) => (
          <div key={name} style={{ position: 'relative' }}>
            <input
              name={name}
              placeholder={placeholder}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              style={styles.input}
              autoComplete="off"
            />
            {name === 'password' && (
              <span onClick={() => setShowPassword((p) => !p)} style={styles.toggle}>
                {showPassword ? '👁️' : '🙈'}
              </span>
            )}
            {name === 'ville' && villeOptions.length > 0 && (
              <ul style={styles.suggestions}>
                {villeOptions.map((v, i) => (
                  <li key={i} onClick={() => handleVilleSelect(v)} style={styles.suggestionItem}>
                    {v}
                  </li>
                ))}
              </ul>
            )}
            {name === 'pays' && paysOptions.length > 0 && (
              <ul style={styles.suggestions}>
                {paysOptions.map((p, i) => (
                  <li key={i} onClick={() => handlePaysSelect(p)} style={styles.suggestionItem}>
                    {p}
                  </li>
                ))}
              </ul>
            )}

            {errors[name] && <div style={styles.error}>{errors[name]}</div>}
          </div>
        ))}
        <button onClick={handleSignup} style={styles.button}>Créer un compte</button>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '450px',
    padding: '40px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    fontSize: '26px',
    marginBottom: '10px',
    color: '#333',
  },
  input: {
    padding: '14px',
    borderRadius: '8px',
    border: '1px solid #999',
    fontSize: '17px',
    width: '100%',
    boxSizing: 'border-box',
  },
  toggle: {
    position: 'absolute',
    right: '10px',
    top: '13px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
    marginLeft: '5px',
  },
  button: {
    backgroundColor: '#6a0dad',
    color: 'white',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '17px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  suggestions: {
    listStyle: 'none',
    padding: 0,
    marginTop: '5px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxHeight: '150px',
    overflowY: 'auto',
    zIndex: 10,
    position: 'absolute',
    width: '100%',
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer',
  },
};

export default Signup;
