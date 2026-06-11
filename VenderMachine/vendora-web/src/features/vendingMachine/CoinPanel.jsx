import React from "react";

// Define US coins and their values (in cents)
const coins = [
  { name: "Penny", value: 1 },
  { name: "Nickel", value: 5 },
  { name: "Dime", value: 10 },
  { name: "Quarter", value: 25 },
  { name: "Dollar", value: 100 },
];

const CoinPanel = ({ onInsert }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Insert Coins</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {coins.map((coin) => (
          <button
            key={coin.name}
            onClick={() => onInsert(coin.value)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid #333",
              cursor: "pointer",
              backgroundColor: "#eee",
              fontWeight: "bold",
            }}
          >
            {coin.name} (${(coin.value / 100).toFixed(2)})
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoinPanel;
