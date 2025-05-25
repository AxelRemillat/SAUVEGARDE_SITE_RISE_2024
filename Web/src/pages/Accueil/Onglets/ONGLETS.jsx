import React, { useState, useRef, useEffect } from "react";
import ContinentTabs from "./ContinentTabs";
import UniversityCard from "./UniversityCard";
import OngletsDispos from "./OngletsDispos";
import FiltresOnglets from "./FiltresOnglets";
import { locations } from "../../../data/universities";

const Onglets = () => {
  const [selectedContinent, setSelectedContinent] = useState("Monde");
  const [filteredData, setFilteredData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const countryRefs = useRef({});
  const pendingScrollCountry = useRef(null); // ✅ nouveau

  const countriesInContinent = Array.from(
    new Set(filteredData.map((u) => u.country))
  );

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
      pendingScrollCountry.current = country;
      setShowAll(true);
    }
  };

  // ✅ effet pour scroller après rendu des cartes
  useEffect(() => {
    if (pendingScrollCountry.current && showAll) {
      const el = countryRefs.current[pendingScrollCountry.current];
      if (el) {
        const yOffset = -300;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        pendingScrollCountry.current = null;
      }
    }
  }, [filteredData, showAll]);

  const displayedUniversities = showAll
    ? filteredData
    : filteredData.slice(0, 3);

  return (
    <>
      <ContinentTabs
        selectedContinent={selectedContinent}
        onSelectContinent={(continent) => {
          setSelectedContinent(continent);
          setShowAll(false);
        }}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        <FiltresOnglets
          data={locations}
          selectedContinent={selectedContinent}
          onFilter={(result) => setFilteredData(result)}
        />

        <div style={{ flex: 1 }}>
          <OngletsDispos
            continent={selectedContinent}
            countries={countriesInContinent}
            onFlagClick={scrollToCountry}
          />

          <div
            style={{
              marginTop: "80px",
              maxWidth: "1400px",
              marginLeft: "-30px",
              marginRight: "0px",
              paddingRight: "10px",
            }}
          >
            {displayedUniversities.map((uni, index) => {
              let ref = null;
              if (!countryRefs.current[uni.country]) {
                ref = (el) => {
                  if (el) countryRefs.current[uni.country] = el;
                };
              }

              return (
                <div key={index} ref={ref}>
                  <UniversityCard university={uni} />
                </div>
              );
            })}

            {filteredData.length > 3 && (
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <button
                  onClick={() => setShowAll(!showAll)}
                  style={{
                    padding: "12px 34px",
                    marginBottom: "40px",
                    backgroundColor: "#613D9D",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {showAll ? "Afficher moins" : "Voir plus d’universités"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Onglets;
