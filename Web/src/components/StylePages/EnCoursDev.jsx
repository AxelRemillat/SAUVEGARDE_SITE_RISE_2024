// src/components/Commun/EnCoursDev.jsx

import React from 'react';

const EnCoursDev = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70px',
    gap: '12px',
    paddingLeft: '40px',
  };

  const dotStyle = {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    marginLeft: '10px',
    backgroundColor: '#000000',
    borderRadius: '50%',
    opacity: 0,
    animation: 'blink 1.5s infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>

      <div style={containerStyle}>
        <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#000000' }}>
          En cours de développement
        </span>
        <span style={{ display: 'inline-flex', marginLeft: '5px' }}>
          <span style={{ ...dotStyle, animationDelay: '0s' }}></span>
          <span style={{ ...dotStyle, animationDelay: '0.5s' }}></span>
          <span style={{ ...dotStyle, animationDelay: '1s' }}></span>
        </span>
      </div>
    </>
  );
};

export default EnCoursDev;
