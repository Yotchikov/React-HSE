import {
  INIT_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_THEME,
  SORT_TODOS,
  ADD_PROJECT,
  INIT_PROJECTS,
} from '../actions';
import { combineReducers } from 'redux';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_TODOS:
      if (action.payload) {
        return action.payload;
      } else {
        return state;
      }
    case ADD_TODO:
      if (action.payload) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case TOGGLE_TODO:
      return state.map((todo) =>
        action.payload === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case SORT_TODOS:
      return [...state].sort((a, b) => {
        switch (action.payload) {
          case 'ID':
            return a.id - b.id;
          case 'NAME':
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
          case 'PRIORITY':
            return a.priority - b.priority;
          default:
            return true;
        }
      });
    default:
      return state;
  }
};

const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_PROJECTS:
      return action.payload;
    case ADD_PROJECT:
      return [...state, action.payload];
    default:
      return state;
  }
};

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  projects: projectsReducer,
  todos: todosReducer,
  theme: themeReducer,
});

export default rootReducer;
