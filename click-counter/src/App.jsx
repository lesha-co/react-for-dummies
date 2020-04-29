import React, { useState } from "react";

import "./App.css";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  function onClick() {
    setCounter(counter + 1);
  }

  return (
    <button onClick={onClick}>
      {props.name} {counter}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Counter name="Красные машины" />
      <Counter name="Синие машины" />
      <Counter name="Черные машины" />
      <Counter name="Белые машины" />
    </div>
  );
}

export default App;
