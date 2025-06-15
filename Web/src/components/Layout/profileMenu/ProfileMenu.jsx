import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './ProfileMenu.css';

const ProfileMenu = ({ profilePic }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleMenu = () => setOpen(!open);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setOpen(false);
        navigate('/');
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-menu" ref={menuRef}>
      <img 
        src={profilePic} 
        alt="Profil" 
        className="profile-pic" 
        onClick={toggleMenu} 
      />
      {open && (
        <div className="dropdown-menu">
          <button onClick={handleLogout}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/126/126467.png" 
              alt="Logout Icon" 
              className="logout-icon"
            />
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
