// src/components/Layout/Navbar.jsx
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
        <li>
          <NavLink
            to="/app"
            end // ✅ active seulement sur /app
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/temoignages"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            TEMOIGNAGES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/appli-mobile"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            APPLICATION MOBILE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/carte-interactive"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            CARTE INTERACTIVE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/qui-sommes-nous"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            QUI SOMMES NOUS ?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/nous-contacter"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            NOUS CONTACTER
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
