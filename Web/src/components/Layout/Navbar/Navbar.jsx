import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/ImagesAccueil_backup/logo.png';
import ProfileMenu from '../profileMenu/ProfileMenu';

const Navbar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();

  const riseRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        riseRef.current &&
        !riseRef.current.contains(event.target) &&
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        setExpandedMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isRiseActive =
    location.pathname.startsWith('/app/appli-mobile') ||
    location.pathname.startsWith('/app/partenaires') ||
    location.pathname.startsWith('/app/salle-trophees');

  const isAboutActive =
    location.pathname.startsWith('/app/qui-sommes-nous') ||
    location.pathname.startsWith('/app/nous-contacter');

  const profilePicUrl =
    'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

  return (
    <nav className="navbar" style={{ paddingLeft: '40px' }}>
      <div className="rise-container">
        <img src={logo} alt="Logo RISE" className="rise-logo" />
        <span className="rise-subtext">REACH, INSPIRE, STUDY, EXPLORE</span>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/app"
            end
            className={({ isActive }) =>
              `nav-text ${isActive && !expandedMenu ? 'active' : ''}`
            }
          >
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/carte-universitaire"
            className={({ isActive }) =>
              `nav-text ${isActive && !expandedMenu ? 'active' : ''}`
            }
          >
            CARTE UNIVERSITAIRE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/temoignages"
            className={({ isActive }) =>
              `nav-text ${isActive && !expandedMenu ? 'active' : ''}`
            }
          >
            TÉMOIGNAGES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/carte-interactive"
            className={({ isActive }) =>
              `nav-text ${isActive && !expandedMenu ? 'active' : ''}`
            }
          >
            CARTE INTERACTIVE
          </NavLink>
        </li>

        {/* RISE+ DROPDOWN */}
        <li className="dropdown-wrapper" ref={riseRef}>
          <span
            className={`nav-text dropdown-label ${
              expandedMenu === 'rise' || isRiseActive ? 'active' : ''
            }`}
            onClick={() => setExpandedMenu(expandedMenu === 'rise' ? null : 'rise')}
          >
            RISE+
          </span>
          {expandedMenu === 'rise' && (
            <ul className="dropdown-menu vertical">
              <li>
                <NavLink
                  to="/app/appli-mobile"
                  className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
                >
                  Application Mobile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app/partenaires"
                  className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
                >
                  Partenaires
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app/salle-trophees"
                  className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
                >
                  Trophées
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* À PROPOS DROPDOWN */}
        <li className="dropdown-wrapper" ref={aboutRef}>
          <span
            className={`nav-text dropdown-label ${
              expandedMenu === 'about' || isAboutActive ? 'active' : ''
            }`}
            onClick={() => setExpandedMenu(expandedMenu === 'about' ? null : 'about')}
          >
            À PROPOS
          </span>
          {expandedMenu === 'about' && (
            <ul className="dropdown-menu vertical">
              <li>
                <NavLink
                  to="/app/qui-sommes-nous"
                  className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
                >
                  Qui sommes-nous ?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app/nous-contacter"
                  className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
                >
                  Nous contacter
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Profil */}
        <li>
          <ProfileMenu profilePic={profilePicUrl} onLogout={() => console.log('Déconnexion...')} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
