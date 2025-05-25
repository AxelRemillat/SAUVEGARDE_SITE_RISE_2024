import { useState } from 'react';
import { getCountryflag } from "../../../data/getcountryflag";
import ExpandableSections from './ExpandableSections';

function UniversityCard({ university }) {
  const [expanded, setExpanded] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
        marginBottom: "40px",
        transition: "transform 0.3s ease",
        border: "1px solid #eee",
        maxHeight: expanded ? "1000px" : "250px",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.015)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      {/* Logo Erasmus */}
      {university.erasmus && (
        <div style={{ position: "absolute", top: "30px", right: "20px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Erasmus%2B_Logo.svg/2560px-Erasmus%2B_Logo.svg.png"
            alt="Erasmus+"
            style={{ width: "160px", borderRadius: "6px" }}
          />
        </div>
      )}

      {/* Drapeau + Nom université */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img
          src={`https://flagcdn.com/w40/${getCountryflag(university.country)}.png`}
          alt={`Drapeau de ${university.country}`}
          style={{
            width: "60px",
            height: "40px",
            borderRadius: "4px",
          }}
        />

        <h2
          style={{
            fontSize: "28px",
            margin: 0,
            color: "#333",
            display: "flex",
            alignItems: "center",
          }}
        >
          {university.name}
          {university.cost === "oui" && (
            <img
              src="https://cdn-icons-png.freepik.com/512/5206/5206272.png"
              alt="Surcoût"
              title="Cette université engendre des frais"
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "12px",
                verticalAlign: "middle",
              }}
            />
          )}
        </h2>
      </div>

      {/* Pays affiché ici */}
      <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
        <strong>Pays :</strong> {university.country}
      </p>

      {/* IELTS + Moyenne + Places + Bouton */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
          fontSize: "18px",
          color: "#555",
        }}
      >
        <div style={{ display: "flex", gap: "40px" }}>
          <p><strong>IELTS requis :</strong> {university.english}</p>
          <p><strong>Moyenne requise :</strong> {university.grade}</p>
          <p><strong>Places :</strong> {university.places}</p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            backgroundColor: "#613D9D",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginLeft: "auto",
          }}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      </div>

      {expanded && (
        <ExpandableSections openSection={openSection} toggleSection={toggleSection} />
      )}
    </div>
  );
}

export default UniversityCard;
