const todos = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          priority: action.priority
        }
      ];
    case 'SORT_TODOS':
      if (action.param === 'byName') {
        const sortedTodos = [...state];
        sortedTodos.sort((a, b) => {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        return sortedTodos;
      } else if (action.param === 'byPriority') {
        const sortedTodos = [...state];
        sortedTodos.sort((a, b) => {
          return a.priority - b.priority;
        });
        return sortedTodos;
      } else return state;
    default:
      return state;
  }
};

export default todos;
