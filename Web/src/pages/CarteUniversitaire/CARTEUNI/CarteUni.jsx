import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import IntroScreen from "./IntroScreen";
import FilterControls from "./FilterControls";
import ZoomControls from "./ZoomControls";
import FullscreenButton from "./FullscreenButton";
import Legend from "./Legend";
import AdvancedFilters from "./AdvancedFilters";
import { useCarteUniLogic } from "./useCarteUniLogic";

console.log("CLÉ API CHARGÉE : ", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

const containerStyle = {
  width: "100%",
  height: "90vh",
  border: "15px solid #613D9D",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  maxWidth: "1200px",
  margin: "40px auto 0 auto", // ⬅️ Add margin-top (e.g. 40px)
  position: "relative",
};

const center = {
  lat: 45.0,
  lng: 5.0,
};

function CarteUni() {
  const {
    showIntro,
    startAdventure,
    map,
    onLoad,
    onUnmount,
    filteredMarkers,
    activeLegend,
    handlePlacesFilter,
    handleCostFilter,
    handleEnglishFilter,
    handleGradeFilter,
    handleZoomIn,
    handleZoomOut,
    handleFullscreenToggle,
  } = useCarteUniLogic();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [advancedFilters, setAdvancedFilters] = useState({
    noCost: false,
    ieltsMax: 9,
    gradeMax: 20,
  });

  const handleAdvancedFiltersChange = (filters) => {
    setAdvancedFilters(filters);
  };

  const getFilteredLocations = () => {
    return filteredMarkers.filter((loc) => {
      if (advancedFilters.noCost && loc.cost === "oui") return false;
      if (loc.english > advancedFilters.ieltsMax) return false;
      if (loc.grade > advancedFilters.gradeMax) return false;
      return true;
    });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeightnt: "100vh",
        backgroundColor: "transparent",  // ✅ Laisse index.css gérer le fond
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoaded && (
        <div id="map-container" style={containerStyle}>
          {showIntro && <IntroScreen onStart={startAdventure} />}

          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              fullscreenControl: false,
              zoomControl: false,
              streetViewControl: false,
            }}
          >
            {getFilteredLocations().map((loc, index) => (
              <Marker
                key={index}
                position={{ lat: loc.lat, lng: loc.lng }}
                title={loc.info}
                icon={`http://maps.google.com/mapfiles/ms/icons/${loc.color || "red"}-dot.png`}
              />
            ))}
          </GoogleMap>

          {!showIntro && (
            <>
              <FilterControls
                onPlaces={handlePlacesFilter}
                onCost={handleCostFilter}
                onEnglish={handleEnglishFilter}
                onGrade={handleGradeFilter}
              />
              <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
              <FullscreenButton onToggle={handleFullscreenToggle} />
              {activeLegend && <Legend type={activeLegend} />}
              <AdvancedFilters onFiltersChange={handleAdvancedFiltersChange} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default React.memo(CarteUni);
