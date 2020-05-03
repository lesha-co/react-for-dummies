import React from 'react';

export function Item({ item, onDelete }) {
  return (
    <div className="todo-line todo-item">
      <span className="left">{item}</span>
      <button className="right" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
