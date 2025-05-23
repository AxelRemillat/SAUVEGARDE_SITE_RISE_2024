// src/pages/Onglets/ContinentTabs.jsx
import React from "react";

const ContinentTabs = ({ selectedContinent, onSelectContinent }) => {
  const continents = ["Monde", "Afrique", "Amérique du Sud", "Amérique du Nord", "Asie", "Europe", "Océanie"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "35px 0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "40px",
        marginBottom: "0px",
      }}
    >
      {continents.map((continent) => (
        <button
          key={continent}
          onClick={() => onSelectContinent(continent)}
          style={{
            padding: "10px 45px",
            fontSize: "22px",
            fontWeight: "bold",
            border: "none",
            background: "none",
            borderBottom: selectedContinent === continent
              ? "3px solid #613D9D"
              : "3px solid transparent",
            color: "#333",
            cursor: "pointer",
            outline: "none",
            boxShadow: "none",
            transition: "border-bottom 0.3s ease",
          }}
        >
          {continent}
        </button>
      ))}
    </div>
  );
};

export default ContinentTabs;
