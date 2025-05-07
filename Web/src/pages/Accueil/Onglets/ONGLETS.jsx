import React, { useState, useRef, useEffect } from "react";
import ContinentTabs from "./ContinentTabs";
import UniversityCard from "./UniversityCard";
import OngletsDispos from "./OngletsDispos";
// import Filtres from "./Filtres"; // 🚫 Filtres désactivés
import { universities, locations } from "../../../data/universities";

const Onglets = () => {
  const [selectedContinent, setSelectedContinent] = useState("Monde");
  const [showAll, setShowAll] = useState(false);

  const filteredUniversities = universities.filter(
    (u) => selectedContinent === "Monde" || u.continent === selectedContinent
  );

  const displayedUniversities = showAll
    ? filteredUniversities
    : filteredUniversities.slice(0, 3);

  const countryRefs = useRef({});

  useEffect(() => {
    countryRefs.current = {};
  }, [selectedContinent]);

  const getLocationData = (universityName) => {
    return locations.find((loc) => loc.info.includes(universityName));
  };

  const scrollToCountry = (country) => {
    const scrollWithOffset = (el) => {
      const yOffset = -300;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    const el = countryRefs.current[country];

    if (el) {
      scrollWithOffset(el);
    } else {
      setShowAll(true);

      setTimeout(() => {
        const elAfterExpand = countryRefs.current[country];
        if (elAfterExpand) {
          scrollWithOffset(elAfterExpand);
        }
      }, 100);
    }
  };

  const countriesInContinent = Array.from(
    new Set(filteredUniversities.map((u) => u.country))
  );

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* 🎯 Filtres désactivés
      <Filtres
        noCost={noCost}
        setNoCost={setNoCost}
        ieltsMax={ieltsMax}
        setIeltsMax={setIeltsMax}
        gradeMax={gradeMax}
        setGradeMax={setGradeMax}
      />
      */}

      {/* 🎯 Partie Onglets + Universités */}
      <div style={{ flex: 1 }}>
        <ContinentTabs
          selectedContinent={selectedContinent}
          onSelectContinent={(continent) => {
            setSelectedContinent(continent);
            setShowAll(false);
          }}
        />

        <OngletsDispos
          continent={selectedContinent}
          countries={countriesInContinent}
          onFlagClick={scrollToCountry}
        />

        <div
          style={{
            paddingTop: "30px",
            paddingBottom: "100px",
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {displayedUniversities.length > 0 ? (
            displayedUniversities.map((uni, index) => {
              const locData = getLocationData(uni.name);

              let ref = null;
              if (!countryRefs.current[uni.country]) {
                ref = (el) => {
                  if (el) countryRefs.current[uni.country] = el;
                };
              }

              return (
                <div key={index} ref={ref}>
                  <UniversityCard university={uni} locationInfo={locData} />
                </div>
              );
            })
          ) : (
            <p style={{ padding: "20px", fontStyle: "italic", color: "#999" }}>
              Aucune université trouvée pour ce continent.
            </p>
          )}

          {filteredUniversities.length > 3 && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#613D9D",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {showAll ? "Voir moins d’universités" : "Voir plus d’universités"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onglets;
