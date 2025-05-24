// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Accueil from './views/Accueil';
import QuiSommesNous from './views/QuiSommesNous';
import AppliMobile from './views/AppliMobile';
import Temoignages from './views/Temoignages';
import NousContacter from './views/NousContacter';
import CarteInteractive from './views/CarteInteractive';
import Intro from './views/Intro'; // 👈 ajoute cette ligne

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Intro s'affiche en page d'accueil */}
        <Route path="/" element={<Intro />} />

        {/* ✅ Tout le reste est dans /app */}
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

