import React from 'react';
import '../styles/forms.scss';

const AddProject = ({ add }) => {
  const handleAdd = (event) => {
    event.preventDefault();
    const { name } = event.target.elements;
    add(name.value);
  };

  return (
    <form onSubmit={handleAdd} autoComplete="off">
      <input type="text" name="name" placeholder="Название проекта" required />
      <button className="submit" type="submit">
        Добавить
      </button>
    </form>
  );
};

export default AddProject;
