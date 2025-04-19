import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer'; // si tu veux l'ajouter plus tard

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
