function ExpandableSections({ openSection, toggleSection }) {
    const sections = ["Cours prévisionnels  ", "Informations relatives au séjour", "Pièce d'identité"];
  
    return (
      <div
        style={{
          marginTop: "40px",
          marginLeft: "76px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {sections.map((section) => (
          <div key={section}>
            <button
              onClick={() => toggleSection(section)}
              style={{
                fontSize: "20px",
                backgroundColor: "#F3EFFF",
                color: "#1E1E1E",
                border: "2px solid #7A52C2",
                borderRadius: "12px",
                padding: "14px 24px",
                cursor: "pointer",
                width: "1000px",
                textAlign: "center",
                transition: "all 0.2s ease-in-out",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E3D7FF";
                e.currentTarget.style.transform = "scale(1.015)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F3EFFF";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              {openSection === section ? "" : ""} {section}
            </button>
  
            {openSection === section && (
              <div style={{ marginTop: "8px", color: "#444" }}>
                <p>
                  Contenu de la section <strong>{section}</strong>...
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default ExpandableSections;
  