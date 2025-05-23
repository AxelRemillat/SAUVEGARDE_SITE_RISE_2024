function ZoomControls({ onZoomIn, onZoomOut }) {
    return (
      <div style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 10,
      }}>
        <button onClick={onZoomIn} style={btnStyle}>+</button>
        <button onClick={onZoomOut} style={btnStyle}>−</button>
      </div>
    );
  }
  
  const btnStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "#613D9D",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
  };
  
  export default ZoomControls;
  