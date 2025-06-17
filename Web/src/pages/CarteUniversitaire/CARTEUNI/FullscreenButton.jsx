function FullscreenButton({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 10,
        backgroundColor: "#613D9D",
        color: "white",
        border: "none",
        borderRadius: "8px",
        width: "42px",
        height: "42px",
        display: "flex", // ✅ centrage
        justifyContent: "center",
        alignItems: "center",
        fontSize: "22px", // ✅ taille symbole
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
      title="Plein écran"
    >
      ⛶
    </button>
  );
}

export default FullscreenButton;
