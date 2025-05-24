function ZoomControls({ onZoomIn, onZoomOut }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 10,
      }}
    >
      <button onClick={onZoomIn} style={zoomBtnStyle} title="Zoom avant">+</button>
      <button onClick={onZoomOut} style={zoomBtnStyle} title="Zoom arrière">−</button>
    </div>
  );
}

const zoomBtnStyle = {
  width: "42px",
  height: "42px",
  backgroundColor: "#613D9D",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "24px",
  fontWeight: "bold",
  display: "flex",       // ✅ centrage horizontal
  justifyContent: "center",
  alignItems: "center",  // ✅ centrage vertical
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  cursor: "pointer",
};

export default ZoomControls;
