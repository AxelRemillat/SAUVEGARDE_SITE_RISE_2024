import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Accueil from './views/Accueil';
import QuiSommesNous from './views/QuiSommesNous';
import AppliMobile from './views/AppliMobile';
import Temoignages from './views/Temoignages';
import NousContacter from './views/NousContacter';
import CarteInteractive from './views/CarteInteractive';
import CarteUniversitaire from './views/CarteUniversitaire'; // ✅ ajouté ici
import Intro from './views/Intro';
import Partenaires from './views/Partenaires';
import SalleTrophees from './views/SalleTrophees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Page d'intro à la racine */}
        <Route path="/" element={<Intro />} />

        {/* ✅ Toutes les vraies pages sous /app */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="appli-mobile" element={<AppliMobile />} />
          <Route path="temoignages" element={<Temoignages />} />
          <Route path="nous-contacter" element={<NousContacter />} />
          <Route path="carte-interactive" element={<CarteInteractive />} />
          <Route path="carte-universitaire" element={<CarteUniversitaire />} /> {/* ✅ ajout ici */}
          <Route path="partenaires" element={<Partenaires />} /> {/* ✅ ajout ici */}
          <Route path="salle-trophees" element={<SalleTrophees />} /> {/* ✅ ajout ici */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
