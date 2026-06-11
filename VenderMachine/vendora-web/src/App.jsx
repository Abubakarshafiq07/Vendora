import React from "react";
import { Routes, Route } from "react-router-dom"; 
import VendingMachinePage from "./features/vendingMachine/VendingMachinePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachinePage />} />
    </Routes>
  );
}

export default App;
