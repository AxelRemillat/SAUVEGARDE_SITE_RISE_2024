import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth } from './firebase';

const db = getFirestore();

// ✅ Création de compte avec enregistrement dans Firestore + code de vérification
export const signUp = async (email, password, userInfo = {}) => {
  try {
    // Étape 1 : Création de l'utilisateur dans Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Étape 2 : Génération d'un code de vérification à 6 chiffres
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Étape 3 : Ajout des infos dans Firestore
    await setDoc(doc(db, 'Users', user.uid), {
      email: user.email,
      role: 'Utilisateur',
      prenom: userInfo.prenom || '',
      nom: userInfo.nom || '',
      age: userInfo.age || '',
      ville: userInfo.ville || '',
      pays: userInfo.pays || '',
      telephone: userInfo.telephone || '',
      verified: false,
      code: verificationCode
    });

    // Étape 4 : Retour des infos
    return {
      userCredential,
      verificationCode
    };
  } catch (error) {
    console.error('Erreur dans signUp :', error);
    throw error;
  }
};

// ✅ Connexion simple
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};