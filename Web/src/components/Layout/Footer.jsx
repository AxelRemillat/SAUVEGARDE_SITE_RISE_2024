import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/ImagesAccueil_backup/logo.png';

const Footer = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const renderModalContent = () => {
    switch (modalType) {
      case 'mentions':
        return <p>Mentions légales de Riseconnect...</p>;
      case 'confidentialite':
        return <p>Politique de confidentialité...</p>;
      case 'cookies':
        return <p>Politique de cookies...</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <footer>
        <div className="footer-container">
          <img src={logo} alt="Logo" className="footer-logo" />

          <div className="logo-section">
            <span>Riseconnect.fr</span>
          </div>

          <div className="location-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#1a1a1a">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5
              2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>France</span>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="social-contact">
          <a href="https://www.instagram.com/rise_connect_/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            <span>@rise_connect_</span>
          </a>

          <a href="mailto:rise@esmefr.onmicrosoft.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
            <span>rise@esmefr.onmicrosoft.com</span>
          </a>
        </div>

        <div className="legal-section">
          <div className="legal-left">Juridique</div>
          <div className="legal-right">
            <a onClick={() => openModal('mentions')}>Mentions légales</a>
            <a onClick={() => openModal('confidentialite')}>Politique de confidentialité</a>
            <a onClick={() => openModal('cookies')}>Cookies</a>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="copyright">
          © 2025 Riseconnect. Tous droits réservés.
        </div>
      </footer>

      {modalType && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            {renderModalContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
