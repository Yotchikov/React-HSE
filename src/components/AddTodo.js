import React from 'react';
import '../styles/forms.scss';

const AddTodo = ({ add }) => {
  const handleAdd = (event) => {
    event.preventDefault();
    const { name, description, priority } = event.target.elements;
    add({
      name: name.value,
      description: description.value,
      priority: parseInt(priority.value),
    });
  };

  return (
    <form onSubmit={handleAdd} autoComplete="off">
      <input type="text" name="name" placeholder="Название" required />
      <input type="text" name="description" placeholder="Описание" required />
      <input type="number" min="1" max="3" name="priority" placeholder="Приоритет" required />
      <button className="submit" type="submit">
        Добавить
      </button>
    </form>
  );
};

export default AddTodo;
