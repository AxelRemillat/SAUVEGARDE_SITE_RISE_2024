import React, { useState } from "react";

function IntroScreen({ onStart }) {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
    setTimeout(() => {
      onStart();
    }, 1500);
  };

  return (
    <div
      className={`intro-screen ${hide ? "hide" : ""}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "22px",
        color: "#c42727",
        fontWeight: "bold",
        borderRadius: "15px",
        overflow: "hidden",
        transition: "opacity 1.5s ease",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          margin: 0,
          whiteSpace: "nowrap", // ⬅️ empêche le retour à la ligne
        }}
      >
        Bienvenue sur ta carte universitaire !
      </h1>

      <button
        onClick={handleClick}
        style={{
          marginTop: "40px",
          backgroundColor: "#613D9D",
          color: "white",
          padding: "20px 40px",
          borderRadius: "20px",
          border: "none",
          fontSize: "22px",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Commencer l'aventure
      </button>
    </div>
  );
}

export default IntroScreen;
