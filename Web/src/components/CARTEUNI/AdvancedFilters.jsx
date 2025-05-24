import React, { useState } from "react";

function AdvancedFilters({ onFiltersChange }) {
  const [noCost, setNoCost] = useState(false);
  const [ieltsMax, setIeltsMax] = useState(9); // 9 = pas de limite
  const [gradeMax, setGradeMax] = useState(20); // 20 = pas de limite

  const handleNoCostChange = () => {
    const updated = !noCost;
    setNoCost(updated);
    onFiltersChange({ noCost: updated, ieltsMax, gradeMax });
  };

  const handleIeltsChange = (e) => {
    const value = parseFloat(e.target.value);
    setIeltsMax(value);
    onFiltersChange({ noCost, ieltsMax: value, gradeMax });
  };

  const handleGradeChange = (e) => {
    const value = parseFloat(e.target.value); 
    setGradeMax(value);
    onFiltersChange({ noCost, ieltsMax, gradeMax: value });
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255,255,255,0.85)",
        padding: "10px 20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        zIndex: 1000,
        fontSize: "14px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <input type="checkbox" checked={noCost} onChange={handleNoCostChange} />
        Sans surcoût
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        IELTS ≤
        <select value={ieltsMax} onChange={handleIeltsChange}>
          <option value="9">9</option>
          <option value="7">7</option>
          <option value="6.5">6.5</option>
          <option value="6">6</option>
          <option value="5.5">5.5</option>
          <option value="5">5</option>
          <option value="4.5">4.5</option>
          <option value="4">4</option>
        </select>
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        Moyenne ≤
        <select value={gradeMax} onChange={handleGradeChange}>
          <option value="20">20</option>
          <option value="13">13</option>
          <option value="12.5">12.5</option>
          <option value="12">12</option>
          <option value="11.5">11.5</option>
          <option value="11">11</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  );
}

export default AdvancedFilters;
