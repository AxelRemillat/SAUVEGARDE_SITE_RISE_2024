function ContinentTabs({ selectedContinent, onSelectContinent }) {
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
          padding: "15px 0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {continents.map((continent) => (
          <button
            key={continent}
            onClick={() => onSelectContinent(continent)}
            style={{
              padding: "10px 45px",
              fontSize: "20px",
              fontWeight: "bold",
              border: "none",
              background: "none",
              borderBottom: selectedContinent === continent
                ? "3px solid #613D9D"
                : "3px solid transparent",
              color: "#333",
              cursor: "pointer",
              outline: "none",         // 🔥 enlève les bordures focus
              boxShadow: "none",       // 🔥 enlève les ombres violettes
              transition: "border-bottom 0.3s ease",
            }}
          >
            {continent}
          </button>
        ))}
      </div>
    );
  }
  
  export default ContinentTabs;
  