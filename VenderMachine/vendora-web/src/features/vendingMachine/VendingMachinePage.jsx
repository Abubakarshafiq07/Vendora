import React, { useState } from "react";
import CoinPanel from "./CoinPanel";
import DisplayPanel from "./DisplayPanel";
import ActionPanel from "./ActionPanel";

const VendingMachinePage = () => {
  const [balance, setBalance] = useState(0);

  const handleInsertCoin = (value) => {
    setBalance(prev => prev + value);
  };

  const handleCancel = () => {
    setBalance(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vending Machine</h1>
      <DisplayPanel balance={balance} />
      <CoinPanel onInsert={handleInsertCoin} />
      <ActionPanel onCancel={handleCancel} />
    </div>
  );
};

export default VendingMachinePage;
