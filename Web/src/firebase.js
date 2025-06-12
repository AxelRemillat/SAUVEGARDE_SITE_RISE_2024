// Import des fonctions nécessaires depuis Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Configuration de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBywZ9nOZdmgRMO35Hp4lfl8jQPQcRZFLI",
  authDomain: "rise-connect-8407a.firebaseapp.com",
  projectId: "rise-connect-8407a",
  storageBucket: "rise-connect-8407a.appspot.com",
  messagingSenderId: "454538766395",
  appId: "1:454538766395:web:8100d51947efc5065f141e",
  measurementId: "G-7S34WZYMTV"
};

// Initialisation de l'application Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Exports nécessaires dans tout ton projet
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
