import React, { useState } from 'react';

export function Counter(props) {
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

export function CounterApp() {
  return (
    <div className="App">
      <Counter name="Красные машины" />
      <Counter name="Синие машины" />
      <Counter name="Черные машины" />
      <Counter name="Белые машины" />
    </div>
  );
}
