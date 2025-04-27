//Il contiendra toute la logique : filtres, zoom, fullscreen, intro.
import { useState, useEffect, useCallback } from "react";
import {
  getMarkerColorByPlaces,
  getMarkerColorByCost,
  getMarkerColorByEnglish,
  getMarkerColorByGrade,
} from "./mapUtils";
import { locations } from "../../data/universities";

export function useCarteUniLogic() {
  const [showIntro, setShowIntro] = useState(true);
  const [map, setMap] = useState(null);
  const [filteredMarkers, setFilteredMarkers] = useState(locations);
  const [activeLegend, setActiveLegend] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const startAdventure = () => {
    setShowIntro(false);
  };

  const handlePlacesFilter = () => {
    setActiveLegend("places");
    const updated = locations.map((loc) => ({
      ...loc,
      color: getMarkerColorByPlaces(loc.places),
    }));
    setFilteredMarkers(updated);
  };

  const handleCostFilter = () => {
    setActiveLegend("cost");
    const updated = locations.map((loc) => ({
      ...loc,
      color: getMarkerColorByCost(loc.cost),
    }));
    setFilteredMarkers(updated);
  };

  const handleEnglishFilter = () => {
    setActiveLegend("english");
    const updated = locations.map((loc) => ({
      ...loc,
      color: getMarkerColorByEnglish(loc.english),
    }));
    setFilteredMarkers(updated);
  };

  const handleGradeFilter = () => {
    setActiveLegend("grade");
    const updated = locations.map((loc) => ({
      ...loc,
      color: getMarkerColorByGrade(loc.grade),
    }));
    setFilteredMarkers(updated);
  };

  const handleZoomIn = () => {
    if (map) map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    if (map) map.setZoom(map.getZoom() - 1);
  };

  const handleFullscreenToggle = () => {
    const element = document.getElementById("map-container");
    if (!document.fullscreenElement) {
      element?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return {
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
    isFullscreen,
  };
}
