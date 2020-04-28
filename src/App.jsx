import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Привет, я Леша</p>
        <a
          className="App-link"
          href="https://www.instagram.com/lesha_co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          мой инстаграм
        </a>
      </header>
    </div>
  );
}

export default App;
