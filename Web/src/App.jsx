import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Accueil from './views/Accueil'; // Ta page d’accueil avec la bannière

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
