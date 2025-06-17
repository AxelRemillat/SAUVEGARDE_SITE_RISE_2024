import React, { useState } from "react";

function AdvancedFilters({ onFiltersChange }) {
  const [noCost, setNoCost] = useState(false);
  const [ieltsMax, setIeltsMax] = useState(9);
  const [gradeMax, setGradeMax] = useState(20);

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
        backgroundColor: "#ffffff",
        padding: "12px 24px",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        zIndex: 1000,
        fontSize: "14px",
        border: "2px solid #613D9D",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 500 }}>
        <input
          type="checkbox"
          checked={noCost}
          onChange={handleNoCostChange}
          style={{ transform: "scale(1.2)" }}
        />
        Sans surcoût
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 500 }}>
        IELTS ≤
        <select
          value={ieltsMax}
          onChange={handleIeltsChange}
          style={{
            padding: "4px 8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        >
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

      <label style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 500 }}>
        Moyenne ≤
        <select
          value={gradeMax}
          onChange={handleGradeChange}
          style={{
            padding: "4px 8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        >
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
