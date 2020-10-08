import React, { Fragment } from "react";
import "./App.css";

// components
import DaysStock from "./components/DaysStock";
import PercentDay from "./components/PercentDay";
import Stock from "./components/Stock";
import StockNormal from "./components/StockNormal";
import TotalSales from "./components/TotalSales";
import Home from "./components/Home";
function App() {
  return (
    <Fragment>
      <div className="App-header">
        <Home />
        <DaysStock />
        <PercentDay />
        <Stock />
        <StockNormal />
        <TotalSales />
      </div>
    </Fragment>
  );
}

export default App;
