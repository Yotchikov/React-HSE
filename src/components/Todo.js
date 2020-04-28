import React from 'react';

const Todo = ({ todo, toggle }) => {
  return (
    <tr className="todos">
      <th>{todo.id}</th>
      <td>{todo.name ? todo.name : '-'}</td>
      <td>{todo.priority ? todo.priority : '-'}</td>
      <td>{todo.description ? todo.description : '-'}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo)}
        />
      </td>
    </tr>
  );
};

export default Todo;
