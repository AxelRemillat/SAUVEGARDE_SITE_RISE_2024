import React, { useEffect } from 'react';
import Banner from '../components/StylePages/Banner';
import TropheeGallery from '../pages/SalleTrophees/Trophees/TropheeGallery';
import BackgroundBlur from '../pages/SalleTrophees/ElementsStyle/BackgroundBlur';
import '../pages/SalleTrophees/Trophees/Trophees.css';
import ConfettiEffect from '../pages/SalleTrophees/ElementsStyle/ConfettiEffect';

const SalleTrophees = () => {
  useEffect(() => {
    document.body.classList.add('custom-background');
    return () => {
      document.body.classList.remove('custom-background');
    };
  }, []);

  return (
    <>
      <BackgroundBlur />
      <Banner text="Nos réussites" />
      <TropheeGallery />
      <ConfettiEffect />

    </>
  );
};

export default SalleTrophees;
