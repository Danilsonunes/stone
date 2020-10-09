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
        <div className="header">
          <Home />
        </div>
        <div className="main">
          <div className="card">
            <h3>Estoque Atual</h3>
            <Stock />
          </div>
          <div className="card">
            <h3>Previsao De Duracao Do Estoque</h3>
            <DaysStock />
          </div>
          <div className="card">
            <h3>Vendas Por Dia</h3>
            <PercentDay />
          </div>
          <div className="card">
            <h3>Porcentaje De Venda Por Dia</h3>
            <StockNormal />
          </div>
          <div className="card">
            <h3>Venda Total Ultimos 6 Meses</h3>
            <TotalSales />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
