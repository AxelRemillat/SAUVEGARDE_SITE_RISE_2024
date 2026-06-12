# RISE — Site Internet (Sauvegarde 2024)

Site web officiel de **RISE**, une plateforme dédiée aux étudiants souhaitant découvrir des opportunités académiques et d'échange à l'international.

---

## Stack technique

- **React 19** + **TypeScript**
- **Vite 6** (bundler / dev server)
- **React Router DOM 7** (navigation)
- **Firebase 11** (authentification + base de données)
- **Google Maps API** (carte interactive des universités)
- **Axios** (requêtes HTTP)

---

## Pages du site

| Route | Description |
|---|---|
| `/` | Page d'introduction / landing |
| `/accueil` | Page d'accueil principale |
| `/carte-universitaire` | Carte interactive des universités partenaires |
| `/carte-interactive` | Carte monde interactive |
| `/temoignages` | Témoignages d'étudiants |
| `/qui-sommes-nous` | Présentation de l'équipe fondatrice |
| `/nous-contacter` | Formulaire de contact |
| `/appli-mobile` | Page présentation de l'application mobile |
| `/partenaires` | Partenaires de RISE |
| `/salle-trophees` | Salle des trophées (gamification) |

---

## Installation & lancement en local

### Prérequis
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Configuration des variables d'environnement
Crée un fichier `.env` à la racine du dossier `Web/` :
```env
VITE_GOOGLE_MAPS_API_KEY=ta_cle_google_maps_ici
```

### Lancer le serveur de développement
```bash
npm run dev
```
Le site sera disponible sur [http://localhost:5173](http://localhost:5173)

### Build de production
```bash
npm run build
```

---

## Structure du projet

```
Web/
├── src/
│   ├── pages/          # Pages du site (une par route)
│   ├── views/          # Composants view par page
│   ├── components/     # Composants réutilisables (Navbar, Footer…)
│   ├── data/           # Données statiques (universités, drapeaux…)
│   ├── firebase.js     # Configuration Firebase
│   └── App.jsx         # Routing principal
├── public/
├── functions/          # Firebase Cloud Functions
└── vite.config.ts
```

---

## Firebase

Le projet utilise Firebase pour :
- L'authentification des utilisateurs (email/password + vérification email)
- La base de données Firestore

La configuration Firebase se trouve dans `src/firebase.js`.

---

## Notes

- Ce repo est une sauvegarde de la version 2024 du site RISE.
- Le repo d'origine est hébergé sur le compte de MathisLevrot.
- Ne jamais committer le fichier `.env` (clés API).
