import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages principales
import Layout from './components/Layout/Layout';
import Accueil from './views/Accueil';
import QuiSommesNous from './views/QuiSommesNous';
import AppliMobile from './views/AppliMobile';
import Temoignages from './views/Temoignages';
import NousContacter from './views/NousContacter';
import CarteInteractive from './views/CarteInteractive';
import Intro from './views/Intro';

// Authentification
import Login from './pages/Intro/Login.jsx';
import Signup from './pages/Intro/Signup.jsx';
import EmailVerification from './pages/Intro/EmailVerification.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil / introduction */}
        <Route path="/" element={<Intro />} />

        {/* Authentification */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<EmailVerification />} /> {/* 🔥 assure-toi que navigate('/verify') pointe bien ici */}

        {/* Application connectée */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="appli-mobile" element={<AppliMobile />} />
          <Route path="temoignages" element={<Temoignages />} />
          <Route path="nous-contacter" element={<NousContacter />} />
          <Route path="carte-interactive" element={<CarteInteractive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
