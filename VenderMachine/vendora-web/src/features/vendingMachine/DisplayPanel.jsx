import React from "react";

const DisplayPanel = ({ balance }) => {
  return (
    <div
      style={{
        padding: "20px",
        fontSize: "24px",
        backgroundColor: "#111",
        color: "#0f0",
        textAlign: "center",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      Balance: ${(balance / 100).toFixed(2)}
    </div>
  );
};

export default DisplayPanel;
