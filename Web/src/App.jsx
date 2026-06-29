import React from 'react';
// HashRouter : le site est servi en statique depuis le portfolio Next.js
// (public/rise-app/index.html) sans rewrites serveur. Le routage par hash évite
// tout problème de base path / deep-link au rafraîchissement dans ce contexte.
import { HashRouter, Routes, Route } from 'react-router-dom';

// Pages principales
import Layout from './components/Layout/Layout';
import Accueil from './views/Accueil';
import QuiSommesNous from './views/QuiSommesNous';
import AppliMobile from './views/AppliMobile';
import Temoignages from './views/Temoignages';
import NousContacter from './views/NousContacter';
import CarteInteractive from './views/CarteInteractive';
import CarteUniversitaire from './views/CarteUniversitaire';
import Partenaires from './views/Partenaires';
import SalleTrophees from './views/SalleTrophees';
import Intro from './views/Intro';

// Widget chatbot RAG RISE — présent en permanence (haut-droite) sur tout le site
import ChatWidget from './components/ChatWidget/ChatWidget';

function App() {
  return (
    <HashRouter>
      <ChatWidget />
      <Routes>
        {/* Page d'introduction (choix invité / admin) */}
        <Route path="/" element={<Intro />} />

        {/* Application principale sous /app */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="appli-mobile" element={<AppliMobile />} />
          <Route path="temoignages" element={<Temoignages />} />
          <Route path="nous-contacter" element={<NousContacter />} />
          <Route path="carte-interactive" element={<CarteInteractive />} />
          <Route path="carte-universitaire" element={<CarteUniversitaire />} />
          <Route path="partenaires" element={<Partenaires />} />
          <Route path="salle-trophees" element={<SalleTrophees />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;