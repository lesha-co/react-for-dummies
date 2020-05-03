import React, { useState } from 'react';
import './todo.css';

import { Field } from './field';
import { Item } from './item';

export function TodoApp() {
  const [items, setItems] = useState([]);

  return (
    <div className="todo">
      <Field onAdd={(deed) => setItems((items) => [...items, deed])} />
      {items.map((item, i) => (
        <Item
          item={item}
          key={i}
          onDelete={() => setItems((items) => [...items.slice(0, i), ...items.slice(i + 1)])}
        />
      ))}
    </div>
  );
}
