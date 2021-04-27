import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./Board";

function App() {
  return (
      <div className="App container">
          <h1>Triple T</h1>

          <Board />
      </div>
  )
}

export default App;
