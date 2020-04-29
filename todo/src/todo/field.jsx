import React, { useState } from "react";

export function Field({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <div className="todo-line">
      <input
        className="left"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="right"
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        New
      </button>
    </div>
  );
}
