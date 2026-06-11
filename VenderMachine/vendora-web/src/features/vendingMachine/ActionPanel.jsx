import React from "react";

const ActionPanel = ({ onCancel }) => {
  return (
    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      <button
        onClick={onCancel}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff4d4f",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Cancel
      </button>

      {/* Optional: Future Purchase button */}
      {/* <button
        onClick={onPurchase}
        style={{
          padding: "10px 20px",
          backgroundColor: "#52c41a",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Purchase
      </button> */}
    </div>
  );
};

export default ActionPanel;
