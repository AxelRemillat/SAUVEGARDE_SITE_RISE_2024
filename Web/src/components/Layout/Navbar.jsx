import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/ImagesAccueil_backup/logo.png';

const Navbar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const riseRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        riseRef.current && !riseRef.current.contains(event.target) &&
        aboutRef.current && !aboutRef.current.contains(event.target)
      ) {
        setExpandedMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" style={{ paddingLeft: '40px' }}>
      <div className="rise-container">
        <img src={logo} alt="Logo RISE" className="rise-logo" />
        <span className="rise-subtext">REACH, INSPIRE, STUDY, EXPLORE</span>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/app" end className={({ isActive }) => (isActive ? 'active' : '')}>
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/carte-universitaire" className={({ isActive }) => (isActive ? 'active' : '')}>
            CARTE UNIVERSITAIRE
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/temoignages" className={({ isActive }) => (isActive ? 'active' : '')}>
            TÉMOIGNAGES
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/carte-interactive" className={({ isActive }) => (isActive ? 'active' : '')}>
            CARTE INTERACTIVE
          </NavLink>
        </li>

        <li className="dropdown-wrapper" ref={riseRef}>
          <span
            className={`dropdown-label ${expandedMenu === 'rise' ? 'active' : ''}`}
            onClick={() => setExpandedMenu(expandedMenu === 'rise' ? null : 'rise')}
          >
            RISE+
          </span>
          {expandedMenu === 'rise' && (
            <ul className="dropdown-menu vertical no-background">
              <li><NavLink to="/app/appli-mobile">Application Mobile</NavLink></li>
              <li><NavLink to="/app/partenaires">Partenaires</NavLink></li>
              <li><NavLink to="/app/salle-trophees">Trophées</NavLink></li>
            </ul>
          )}
        </li>

        <li className="dropdown-wrapper" ref={aboutRef}>
          <span
            className={`dropdown-label ${expandedMenu === 'about' ? 'active' : ''}`}
            onClick={() => setExpandedMenu(expandedMenu === 'about' ? null : 'about')}
          >
            À PROPOS
          </span>
          {expandedMenu === 'about' && (
            <ul className="dropdown-menu vertical no-background">
              <li><NavLink to="/app/qui-sommes-nous">Qui sommes-nous ?</NavLink></li>
              <li><NavLink to="/app/nous-contacter">Nous contacter</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;