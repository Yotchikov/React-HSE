let nextTodoId = 1;

export const addTodo = (name, description, priority) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name,
  description,
  priority
});

export const sortTodos = param => ({
  type: 'SORT_TODOS',
  param
});
