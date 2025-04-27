import React from "react";

function FilterControls({ onPlaces, onCost, onEnglish, onGrade }) {
  const buttonStyle = {
    backgroundColor: "#613D9D",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  // Hover géré en JS, pas possible directement => astuce : avec "onMouseEnter" / "onMouseLeave"
  const [hovered, setHovered] = React.useState(null);

  const getButtonHoverStyle = (index) => ({
    ...buttonStyle,
    backgroundColor: hovered === index ? "#7A4FC4" : "#613D9D",
    transform: hovered === index ? "scale(1.05)" : "scale(1)",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <button
        style={getButtonHoverStyle(0)}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
        onClick={onPlaces}
      >
        Nombre de places
      </button>

      <button
        style={getButtonHoverStyle(1)}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
        onClick={onCost}
      >
        Surcoût académique
      </button>

      <button
        style={getButtonHoverStyle(2)}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
        onClick={onEnglish}
      >
        Niveau d'anglais
      </button>

      <button
        style={getButtonHoverStyle(3)}
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}
        onClick={onGrade}
      >
        Moyenne requise
      </button>
    </div>
  );
}

export default FilterControls;
