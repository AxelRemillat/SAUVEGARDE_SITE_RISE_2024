import { useState } from 'react';
import { getCountryflag } from '../data/getcountryflag';
import { locations } from "../data/universities";
import ExpandableSections from "./ONGLETS/ExpandableSections";

function UniversityCard({ university }) {
  const [expanded, setExpanded] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const details = locations.find(l => l.info.includes(university.name));

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

      {/* Drapeau + Nom + $ */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={`https://flagcdn.com/w40/${getCountryflag(university.country)}.png`}
          alt={`Drapeau de ${university.country}`}
          style={{
            width: "60px",
            height: "40px",
            marginRight: "16px",
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
          {details?.cost === "oui" && (
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

      {/* Pays + lien + bouton voir plus */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 0 10px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <p style={{ fontSize: "20px", color: "#666", margin: 0 }}>
            {university.country}
          </p>
          {details?.link && (
            <a
              href={details.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "16px",
                color: "#613D9D",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginLeft: "8px",
                textDecoration: "none"
              }}
            >
              <span>🌐</span>
              <span style={{ textDecoration: "underline" }}>Site web</span>
            </a>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#613D9D",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      </div>

      {/* IELTS - Places - Moyenne */}
      {details && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "80px",
            marginLeft: "76px",
            marginTop: "10px",
          }}
        >
          <p style={{ fontSize: "18px", color: "#444", margin: 0 }}>
            <strong>IELTS :</strong> {details.english}
          </p>

          <p style={{ fontSize: "18px", color: "#444", margin: 0 }}>
            <strong>Places :</strong>
            <span
              style={{
                display: "inline-block",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor:
                  details.places === "low"
                    ? "#e74c3c"
                    : details.places === "medium"
                    ? "#f39c12"
                    : "#2ecc71",
                margin: "0 8px",
                verticalAlign: "middle",
              }}
            ></span>
            {details.places}
          </p>

          <p style={{ fontSize: "18px", color: "#444", margin: 0 }}>
            <strong>Moyenne requise :</strong> {details.grade}
          </p>
        </div>
      )}

      {/* ✅ Sections extensibles */}
      {expanded && (
        <>
          <ExpandableSections
            openSection={openSection}
            toggleSection={toggleSection}
          />

          {/* ✅ Images associées à l'université */}
          {details?.images?.length > 0 && (
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              {details.images.slice(0, 2).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Illustration ${index + 1}`}
                  style={{
                    width: "300px",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default UniversityCard;
