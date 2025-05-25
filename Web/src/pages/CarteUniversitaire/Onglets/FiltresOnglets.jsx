import React, { useState, useEffect } from "react";

const FiltresOnglets = ({ data, selectedContinent, onFilter }) => {
  const [surcoutFilter, setSurcoutFilter] = useState({ oui: true, non: true });
  const [ieltsMax, setIeltsMax] = useState(null);
  const [gradeMax, setGradeMax] = useState(null);

  const toggleSurcout = (type) => {
    setSurcoutFilter({ ...surcoutFilter, [type]: !surcoutFilter[type] });
  };

  useEffect(() => {
    const filtered = data.filter((u) => {
      const matchContinent =
        selectedContinent === "Monde" || u.continent === selectedContinent;
      const matchSurcout =
        (surcoutFilter.oui && u.cost === "oui") ||
        (surcoutFilter.non && u.cost === "non");
      const matchIELTS = ieltsMax === null || u.english <= ieltsMax;
      const matchGrade = gradeMax === null || u.grade <= gradeMax;
      return matchContinent && matchSurcout && matchIELTS && matchGrade;
    });

    onFilter(filtered);
  }, [data, selectedContinent, surcoutFilter, ieltsMax, gradeMax]);

  return (
    <div style={{ minWidth: "220px", padding: "20px" }}>
      <h3 style={{ marginBottom: "16px" }}>Filtres</h3>

      <div style={{ marginBottom: "20px" }}>
        <strong>Surcoûts :</strong>
        <div>
          <label>
            <input
              type="checkbox"
              checked={surcoutFilter.oui}
              onChange={() => toggleSurcout("oui")}
            />{" "}
            Avec surcoûts
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={surcoutFilter.non}
              onChange={() => toggleSurcout("non")}
            />{" "}
            Sans surcoûts
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>IELTS maximum :</strong>
        {[9, 7, 6.5, 6, 5.5, 5, 4.5, 4].map((val) => (
          <div key={val}>
            <label>
              <input
                type="radio"
                name="ielts"
                checked={ieltsMax === val}
                onChange={() => setIeltsMax(val)}
              />{" "}
              ≤ {val}
            </label>
          </div>
        ))}
        <div>
          <label>
            <input
              type="radio"
              name="ielts"
              checked={ieltsMax === null}
              onChange={() => setIeltsMax(null)}
            />{" "}
            Aucune limite
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>Moyenne maximum :</strong>
        {[20, 13, 12, 11.5, 11, 10].map((val) => (
          <div key={val}>
            <label>
              <input
                type="radio"
                name="grade"
                checked={gradeMax === val}
                onChange={() => setGradeMax(val)}
              />{" "}
              ≤ {val}
            </label>
          </div>
        ))}
        <div>
          <label>
            <input
              type="radio"
              name="grade"
              checked={gradeMax === null}
              onChange={() => setGradeMax(null)}
            />{" "}
            Aucune limite
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltresOnglets;
