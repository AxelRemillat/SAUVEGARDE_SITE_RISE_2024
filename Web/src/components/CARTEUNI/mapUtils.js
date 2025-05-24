// Fonctions utilitaires pour les filtres

export function getMarkerColorByPlaces(places) {
    return places === "low" ? "red" :
           places === "medium" ? "orange" : "green";
  }
  
  export function getMarkerColorByCost(cost) {
    return cost === "oui" ? "red" : "green";
  }
  
  export function getMarkerColorByEnglish(score) {
    return score === 4 ? "pink" :
           score === 4.5 ? "blue" :
           score === 5 ? "green" :
           score === 5.5 ? "yellow" :
           score === 6 ? "orange" :
           score === 6.5 ? "red" : "purple";
  }
  
  export function getMarkerColorByGrade(grade) {
    return grade === 10 ? "blue" :
           grade === 11 ? "green" :
           grade === 11.5 ? "yellow" :
           grade === 12 ? "orange" :
           grade === 12.5 ? "red" :
           grade === 13 ? "purple" : "gray";
  }
  