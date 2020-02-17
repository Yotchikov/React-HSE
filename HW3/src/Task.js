import React from 'react';

const Task = ({ id, name, description, priority }) => {
  return (
    <div>
      <h3>Задача {id}</h3>
      <p>Исполнитель: {name}</p>
      <p>Описание: {description}</p>
      <p>Приоритет: {priority}</p>
      <hr />
    </div>
  )
}

export default Task;