import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/ImagesAccueil_backup/logo.png';
import ProfileMenu from '../profileMenu/ProfileMenu';
// On importe notre nouveau composant

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

  // Exemple d'image de profil (remplace par ton image dynamique si besoin)
  const profilePicUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'; 

  const handleLogout = () => {
    console.log("Déconnexion en cours...");
    // Ajoute ici ta logique de déconnexion
  };

  return (
    <nav className="navbar" style={{ paddingLeft: '40px' }}>
      <div className="rise-container">
        <img src={logo} alt="Logo RISE" className="rise-logo" />
        <span className="rise-subtext">REACH, INSPIRE, STUDY, EXPLORE</span>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/app" end className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}>
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/carte-universitaire" className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}>
            CARTE UNIVERSITAIRE
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/temoignages" className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}>
            TÉMOIGNAGES
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/carte-interactive" className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}>
            CARTE INTERACTIVE
          </NavLink>
        </li>

        <li className="dropdown-wrapper" ref={riseRef}>
          <span
            className={`nav-text dropdown-label ${expandedMenu === 'rise' ? 'active' : ''}`}
            onClick={() => setExpandedMenu(expandedMenu === 'rise' ? null : 'rise')}
          >
            RISE+
          </span>
          {expandedMenu === 'rise' && (
            <ul className="dropdown-menu vertical no-background">
              <li><NavLink to="/app/appli-mobile" className="nav-text">Application Mobile</NavLink></li>
              <li><NavLink to="/app/partenaires" className="nav-text">Partenaires</NavLink></li>
              <li><NavLink to="/app/salle-trophees" className="nav-text">Trophées</NavLink></li>
            </ul>
          )}
        </li>

        <li className="dropdown-wrapper" ref={aboutRef}>
          <span
            className={`nav-text dropdown-label ${expandedMenu === 'about' ? 'active' : ''}`}
            onClick={() => setExpandedMenu(expandedMenu === 'about' ? null : 'about')}
          >
            À PROPOS
          </span>
          {expandedMenu === 'about' && (
            <ul className="dropdown-menu vertical no-background">
              <li><NavLink to="/app/qui-sommes-nous" className="nav-text">Qui sommes-nous ?</NavLink></li>
              <li><NavLink to="/app/nous-contacter" className="nav-text">Nous contacter</NavLink></li>
            </ul>
          )}
        </li>

        {/* Le bouton profil ajouté ici */}
        <li>
          <ProfileMenu
            profilePic={profilePicUrl}
            onLogout={handleLogout}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
