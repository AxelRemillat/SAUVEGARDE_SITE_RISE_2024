import { useState } from 'react';
import ContinentTabs from './components/ONGLETS/ContinentTabs';
import UniversityCard from './components/universitycard';
import { universities, locations } from './data/universities';

function App() {
  const [selectedContinent, setSelectedContinent] = useState("Monde");

  const filteredUniversities = selectedContinent === "Monde"
    ? universities
    : universities.filter(u => u.continent === selectedContinent);

  // Étape 2 : fonction pour chercher les infos correspondantes
  function getLocationData(universityName) {
    return locations.find(loc => loc.info.includes(universityName));
  }

  return (
    <div>
      {/* Onglets en sticky pleine largeur */}
      <div style={{ width: "100%" }}>
        <ContinentTabs
          selectedContinent={selectedContinent}
          onSelectContinent={setSelectedContinent}
        />
      </div>

      {/* Cartes centrées */}
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "100px",
          minHeight: "100vh", // Empêche l'effondrement de la zone
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni, index) => {
            const locData = getLocationData(uni.name); // Étape 3
            return (
              <UniversityCard
                key={index}
                university={uni}
                locationInfo={locData} // On envoie les infos supplémentaires
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
}

export default App;
