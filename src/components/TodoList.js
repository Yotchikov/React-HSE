import React from 'react';
import Todo from './Todo';
import '../styles/list.scss';

const TodoList = ({ todos, toggle, sort }) => {
  if (todos.length > 0) {
    return (
      <table className="todos">
        <thead>
          <tr>
            <th className="clickable" onClick={() => sort('ID')}>
              #
            </th>
            <th className="clickable" onClick={() => sort('NAME')}>
              Название
            </th>
            <th className="clickable" onClick={() => sort('PRIORITY')}>
              Приоритет
            </th>
            <th>Описание</th>
            <th>✔</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggle={toggle} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="empty-message">
      <h3>Пока нет ни одного задания...</h3>
    </div>
  );
};

export default TodoList;
