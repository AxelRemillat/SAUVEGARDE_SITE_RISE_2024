import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="rise-container">
        <span className="rise-text">RISE</span>
        <span className="rise-subtext">REACH, INSPIRE, STUDY, EXPLORE</span>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>ACCUEIL</NavLink></li>
        <li><NavLink to="/temoignages">TEMOIGNAGES</NavLink></li>
        <li><NavLink to="/appli-mobile">APPLICATION MOBILE</NavLink></li>
        <li><NavLink to="/carte-interactive">CARTE INTERACTIVE</NavLink></li>
        <li><NavLink to="/qui-sommes-nous">QUI SOMMES NOUS ?</NavLink></li>
        <li><NavLink to="/nous-contacter">NOUS CONTACTER</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;