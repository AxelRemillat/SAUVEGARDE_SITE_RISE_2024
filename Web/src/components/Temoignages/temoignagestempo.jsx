import React, { useState } from 'react';
import TemAfrique from '../../assets/ImagesAccueil_backup/TemAfrique.webp';
import TemAN from '../../assets/ImagesAccueil_backup/TemAN.webp';
import TemAS from '../../assets/ImagesAccueil_backup/TemAS.webp';
import TemAsie from '../../assets/ImagesAccueil_backup/TemAsie.webp';
import TemEurope from '../../assets/ImagesAccueil_backup/TemEurope.webp';
import TemOceanie from '../../assets/ImagesAccueil_backup/TemOceanie.webp';

const imageData = [
  { id: 'Europe', label: 'Europe', image: TemEurope },
  { id: 'Asia', label: 'Asie', image: TemAsie },
  { id: 'Oceania', label: 'Océanie', image: TemOceanie },
  { id: 'US', label: 'Amérique du Nord', image: TemAN },
  { id: 'Africa', label: 'Afrique', image: TemAfrique },
  { id: 'SouthAmerica', label: 'Amérique du Sud', image: TemAS },
];

const Temoignages = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="container">
        {imageData.slice(0, 3).map((item) => (
          <div className="column" key={item.id}>
            <div className="image-container">
              <img src={item.image} alt={`Image ${item.label}`} />
            </div>
            <button className="custom-button" onClick={() => openModal(item.id)}>
              {item.label}
            </button>
          </div>
        ))}
      </div>

      <div className="line-separator" />

      <div className="container">
        {imageData.slice(3).map((item) => (
          <div className="column" key={item.id}>
            <button className="custom-button" onClick={() => openModal(item.id)}>
              {item.label}
            </button>
            <div className="image-container">
              <img src={item.image} alt={`Image ${item.label}`} />
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="modal-overlay active">
          <div className="custom-modal">
            <div className="custom-close-btn" onClick={closeModal}>
              &times;
            </div>
            <h2>Témoignages - {imageData.find((item) => item.id === activeModal)?.label}</h2>
            <div className="content-wrapper">
              <div className="carousel-container">
                <div className="carousel-title">
                  <h3>Pays à compléter</h3>
                  <h4>Université à compléter</h4>
                </div>
                <div className="carousel">
                  <div className="carousel-images">
                    <img src={imageData.find((item) => item.id === activeModal)?.image} alt="carousel 1" />
                  </div>
                </div>
              </div>
              <div className="testimonial-text">
                <p><em>Texte du témoignage à ajouter ici...</em></p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0px 20px; /* ✅ Marge verticale réduite */
          gap: 20px;
        }

        .column {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 5px; /* ✅ Compacté */
          width: 30%;
        }

        .custom-button {
          width: 100%;
          padding: 18px;
          font-size: 22px;
          background-color: #f5f5f5;
          border: 3px solid #000;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          margin-bottom: 8px;
        }

        .custom-button:hover {
          background-color: #e0e0e0;
          transform: translateY(-3px);
        }

        .line-separator {
          width: 80%;
          height: 2px;
          background-color: black;
          margin: 20px auto;
          opacity: 0.6;
        }

        .image-container {
          width: 300px;
          height: 200px;
          overflow: hidden;
          border: 2px solid #ddd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-overlay.active {
          display: flex;
        }

        .custom-modal {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 90%;
          height: 85%;
          max-width: 1200px;
          background-color: #fff;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
        }

        .custom-close-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background-color: #ff0000;
          color: #000;
          border: none;
          border-radius: 10px;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 1001;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .custom-close-btn:hover {
          background-color: #d40000;
          transform: scale(1.1);
        }

        .content-wrapper {
          display: flex;
          flex: 1;
          gap: 20px;
          margin-bottom: 40px;
          align-items: stretch;
        }

        .carousel-container {
          position: relative;
          width: 60%;
        }

        .carousel-title {
          margin-top: 20px;
          text-align: center;
        }

        .carousel-title h3 {
          margin: 0;
          font-size: 22px;
          font-weight: bold;
        }

        .carousel-title h4 {
          margin: 0;
          font-size: 18px;
          color: #555;
          font-weight: normal;
        }

        .carousel {
          display: flex;
          overflow: hidden;
          border-radius: 10px;
          border: 2px solid #ddd;
        }

        .carousel-images {
          display: flex;
          transition: transform 0.5s ease;
        }

        .carousel-images img {
          width: 100%;
          height: auto;
          flex-shrink: 0;
          object-fit: cover;
        }

        .testimonial-text {
          width: 40%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 10px 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 18px;
          line-height: 1.6;
          max-height: 870px;
          overflow-y: auto;
          margin-top: 66px;
        }
      `}</style>
    </>
  );
};

export default Temoignages;
