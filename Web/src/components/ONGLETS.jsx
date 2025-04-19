import React, { useState } from 'react';
import UniversityCard from './UniversityCard';
import ContinentTabs from './ContinentTabs';
import ExpandableSections from './ExpandableSections';
import { universities, locations } from '../../data/universities';

const Onglets = () => {
  const [selectedContinent, setSelectedContinent] = useState("Monde");
  const [openSection, setOpenSection] = useState(null);

  const filteredUniversities =
    selectedContinent === "Monde"
      ? universities
      : universities.filter((u) => u.continent === selectedContinent);

  const getLocationData = (universityName) => {
    return locations.find((loc) => loc.info.includes(universityName));
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      {/* Onglets des continents */}
      <ContinentTabs
        selectedContinent={selectedContinent}
        onSelectContinent={setSelectedContinent}
      />

      {/* Liste des universités filtrées */}
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "100px",
          minHeight: "100vh",
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

      {/* Sections déroulantes en dessous */}
      <ExpandableSections
        openSection={openSection}
        toggleSection={toggleSection}
      />
    </div>
  );
};

export default Onglets;
