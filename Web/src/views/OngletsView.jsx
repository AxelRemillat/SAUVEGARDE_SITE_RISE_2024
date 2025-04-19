import { useState } from 'react';

import ContinentTabs from '../components/ONGLETS/ContinentTabs';
import UniversityCard from '../components/ONGLETS/UniversityCard';
import { universities, locations } from '../data/universities';

const OngletsView = () => {
  const [selectedContinent, setSelectedContinent] = useState("Monde");

  const filteredUniversities =
    selectedContinent === "Monde"
      ? universities
      : universities.filter((u) => u.continent === selectedContinent);

  function getLocationData(universityName) {
    return locations.find((loc) => loc.info.includes(universityName));
  }

  return (
    <div>
      {/* Onglets continent */}
      <div style={{ width: "100%" }}>
        <ContinentTabs
          selectedContinent={selectedContinent}
          onSelectContinent={setSelectedContinent}
        />
      </div>

      {/* Cartes des universités */}
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
    </div>
  );
};

export default OngletsView;
