import React, { useEffect, useState } from 'react';

// Importation des images
import img1 from '../../../assets/ImagesAccueil_backup/EXPLORE.jpg';
import img2 from '../../../assets/ImagesAccueil_backup/BERLIN.avif';
import img3 from '../../../assets/ImagesAccueil_backup/REACH.jpg';
import img4 from '../../../assets/ImagesAccueil_backup/INSPIRE.jpg';
import img5 from '../../../assets/ImagesAccueil_backup/STUDY.avif';

const images = [
  { 
    src: img2, 
    text: <>Bienvenue chez  <span style={{ color: '#ee0d0d' }}>RISE</span></> 
  },
  { src: img3, text: <span><span style={{ color: '#ee0d0d' }}>R</span>EACH</span> },
  { src: img4, text: <span><span style={{ color: '#ee0d0d' }}>I</span>NSPIRE</span> },
  { src: img5, text: <span><span style={{ color: '#ee0d0d' }}>S</span>TUDY</span> },
  { src: img1, text: <span><span style={{ color: '#ee0d0d' }}>E</span>XPLORE</span> }
];

const AccueilBanner = () => {
  const [index, setIndex] = useState(0);
  const [prenom, setPrenom] = useState('');

  useEffect(() => {
    const fullName = sessionStorage.getItem('fullName');
    if (fullName) {
      const prenomOnly = fullName.split(' ')[0];
      setPrenom(prenomOnly);
    }
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 9000);
    return () => clearTimeout(timer);  
  }, [index]);

  return (
    <div style={styles.slideshowContainer}>
      {images.map((img, i) => (
        <div key={i} style={{ ...styles.slide, opacity: index === i ? 1 : 0 }}>
          <img src={img.src} alt={`Slide ${i}`} style={styles.image} />
          <div style={styles.slideText}>
            {img.text}
            {i === 0 && prenom && (
              <div>{prenom} </div>
            )}
          </div>
        </div>
      ))}

      <button style={{ ...styles.navArrow, ...styles.prev }} onClick={prevSlide}>&#10094;</button>
      <button style={{ ...styles.navArrow, ...styles.next }} onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

const styles = {
  slideshowContainer: {
    position: 'relative',
    width: '100%',
    height: '550px',
    overflow: 'hidden',
    fontFamily: 'Open Sans, sans-serif',
    backgroundColor: 'black'
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  slideText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '65px',
    fontWeight: '700',
    textAlign: 'center',
    zIndex: 2,
    lineHeight: 1.3
  },
  navArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    border: 'none',
    fontSize: '24px',
    padding: '8px 12px',
    cursor: 'pointer',
    zIndex: 3,
    borderRadius: '4px',
    userSelect: 'none'
  },
  prev: {
    left: '10px'
  },
  next: {
    right: '10px'
  }
};

export default AccueilBanner;
