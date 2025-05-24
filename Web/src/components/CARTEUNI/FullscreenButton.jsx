// fonction qui permet de mettre en grand écran la carte
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
          width: "40px",
          height: "40px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        ⛶
      </button>
    );
  }
  
  export default FullscreenButton;
  