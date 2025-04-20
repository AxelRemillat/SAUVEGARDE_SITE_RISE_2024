import React, { useState } from "react";
import ContinentTabs from "./ContinentTabs";
import UniversityCard from "./UniversityCard";
import { universities, locations } from "../../../data/universities";


const Onglets = () => {
  const [selectedContinent, setSelectedContinent] = useState("Monde");

  // Filtrage des universités selon le continent
  const filteredUniversities =
    selectedContinent === "Monde"
      ? universities
      : universities.filter((u) => u.continent === selectedContinent);

  // Fonction pour récupérer les infos liées à l’université
  const getLocationData = (universityName) => {
    return locations.find((loc) => loc.info.includes(universityName));
  };

  return (
    <div>
      {/* Onglets continentaux */}
      <ContinentTabs
        selectedContinent={selectedContinent}
        onSelectContinent={setSelectedContinent}
      />

      {/* Cartes des universités */}
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "100px",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni, index) => {
            const locData = getLocationData(uni.name);
            return (
              <UniversityCard
                key={index}
                university={uni}
                locationInfo={locData}
              />
            );
          })
        ) : (
          <p style={{ padding: "20px", fontStyle: "italic", color: "#999" }}>
            Aucune université trouvée pour ce continent.
          </p>
        )}
      </div>
    </div>
  );
};

export default Onglets;
