import React from 'react';

const TitreHistoires = () => {
  return (
    <div id="fade-in-container">
      <div className="fade-in-text">
        Témoignages d'Étudiants : Des Histoires pour Voyager ✈️
      </div>

      <style jsx>{`
        #fade-in-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          text-align: center;
          padding-left: 10%;
          margin: 80px 0;
        }

        .fade-in-text {
          font-size: 36px;
          color: #d10000;
          font-weight: bold;
          opacity: 0;
          animation: fadeInTitreHistoires 3s forwards; /* ✅ Nom unique */
          text-align: center;
          margin: 0;
        }

        @keyframes fadeInTitreHistoires {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TitreHistoires;
