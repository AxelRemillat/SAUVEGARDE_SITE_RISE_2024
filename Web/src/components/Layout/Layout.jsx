// est appelé dans apps c'est ce qui gére tout ce qui est présent partout


import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('introSeen') === 'true';

    if (!hasSeenIntro) {
      navigate('/'); // Redirige vers la page d'intro si non vue
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
