import React from 'react';

import { TodoApp } from './todo/TodoApp';
import { CounterApp } from './click-counter/CounterApp';

function App() {
  return (
    <div className="App">
      <CounterApp />
      <TodoApp />
    </div>
  );
}

export default App;
