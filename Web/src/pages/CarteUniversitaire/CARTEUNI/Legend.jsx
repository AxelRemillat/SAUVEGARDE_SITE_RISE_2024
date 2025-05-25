import React from "react";

function Legend({ type }) {
  if (!type) return null;

  const legends = {
    places: [
      { color: "red", label: "Faible (1-5)" },
      { color: "orange", label: "Modéré (5-15)" },
      { color: "green", label: "Élevé (15+)" },
    ],
    cost: [
      { color: "green", label: "Pas de surcoût" },
      { color: "red", label: "Surcoût académique" },
    ],
    english: [
      { color: "pink", label: "4/9" },
      { color: "blue", label: "4.5/9" },
      { color: "green", label: "5/9" },
      { color: "yellow", label: "5.5/9" },
      { color: "orange", label: "6/9" },
      { color: "red", label: "6.5/9" },
      { color: "purple", label: "7/9" },
    ],
    grade: [
      { color: "blue", label: "10/20" },
      { color: "green", label: "11/20" },
      { color: "yellow", label: "11.5/20" },
      { color: "orange", label: "12/20" },
      { color: "red", label: "12.5/20" },
      { color: "purple", label: "13/20" },
    ],
  };

  const titleByType = {
    places: "Nombre de places",
    cost: "Surcoût académique",
    english: "Note nécessaire à l'IELTS",
    grade: "Moyenne requise",
  };

  const currentLegend = legends[type] || [];

  return (
    <div
      style={{
        position: "absolute",
        top: "70px",
        right: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        fontSize: "14px",
        zIndex: 1000,
        width: "220px",
      }}
    >
      <strong style={{ display: "block", marginBottom: "10px" }}>
        {titleByType[type]}
      </strong>
      {currentLegend.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "6px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: item.color,
              marginRight: "10px",
            }}
          />
          <span style={{ color: "#333" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Legend;
