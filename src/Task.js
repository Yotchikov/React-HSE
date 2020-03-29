import React from 'react';

const Task = ({ id, name, description, priority }) => {
  return (
    <div>
      <h2>Задача {id}</h2>
      <p>Исполнитель: <b>{name}</b></p>
      <p>Описание: <b>{description}</b></p>
      <p>Приоритет: <b>{priority}</b></p>
    </div>
  )
}

export default Task;