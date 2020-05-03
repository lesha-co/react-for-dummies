import React, { useState } from 'react';

export function Field({ onAdd }) {
  const [text, setText] = useState('');

  function onInputChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="todo-line">
      <input className="left" type="text" value={text} onChange={onInputChange} />
      <button
        className="right"
        onClick={() => {
          onAdd(text);
          setText('');
        }}
      >
        New
      </button>
    </div>
  );
}
