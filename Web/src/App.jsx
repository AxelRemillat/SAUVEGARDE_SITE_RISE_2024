// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Accueil from './views/Accueil';
import QuiSommesNous from './views/QuiSommesNous';
import AppliMobile from './views/AppliMobile';
import Temoignages from './views/Temoignages'
import NousContacter from './views/NousContacter';
import CarteInteractive from './views/CarteInteractive'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="appli-mobile" element={<AppliMobile />} /> {/* ✅ ajout de la route */}
          <Route path="temoignages" element={<Temoignages />} /> {/* ✅ ajout de la route */}
          <Route path="nous-contacter" element={<NousContacter />} /> {/* ✅ ajout de la route */}
          <Route path="carte-interactive" element={<CarteInteractive />} /> {/* ✅ ajout de la route */}
          {/* Ajoute d'autres routes ici si nécessaire */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
