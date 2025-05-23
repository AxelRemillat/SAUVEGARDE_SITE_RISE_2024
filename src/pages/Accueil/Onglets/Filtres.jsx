import React from 'react';

const Filtres = ({ noCost, setNoCost, ieltsMax, setIeltsMax, gradeMax, setGradeMax }) => {
  const resetFilters = () => {
    setNoCost(false);
    setIeltsMax(9);
    setGradeMax(20);
  };

  return (
    <div style={{ padding: '1rem', borderRight: '1px solid #ccc', minWidth: '220px' }}>
      <h2>Filtres</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={noCost}
            onChange={() => setNoCost(!noCost)}
          />
          Sans surcoût
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>IELTS maximum :</label>
        <select
          value={ieltsMax}
          onChange={(e) => setIeltsMax(parseFloat(e.target.value))}
          style={{ display: 'block', width: '100%', marginTop: '0.5rem' }}
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
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Moyenne maximum :</label>
        <select
          value={gradeMax}
          onChange={(e) => setGradeMax(parseFloat(e.target.value))}
          style={{ display: 'block', width: '100%', marginTop: '0.5rem' }}
        >
          <option value="20">20</option>
          <option value="13">13</option>
          <option value="12.5">12.5</option>
          <option value="12">12</option>
          <option value="11.5">11.5</option>
          <option value="11">11</option>
          <option value="10">10</option>
        </select>
      </div>

      {/* 🎯 Bouton Réinitialiser */}
      <button
        onClick={resetFilters}
        style={{
          marginTop: "20px",
          backgroundColor: "#613D9D",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        Réinitialiser
      </button>
    </div>
  );
};

export default Filtres;
