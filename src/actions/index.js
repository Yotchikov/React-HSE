import { request } from '../api';

export const INIT_PROJECTS = 'INIT_PROJECTS';
export const initProjects = () => (dispatch) => {
  request('/projects/').then((res) =>
    dispatch({ type: INIT_PROJECTS, payload: res })
  );
};

export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = (name) => (dispatch) => {
  request('/projects/', 'POST', { name }).then((res) =>
    dispatch({
      type: ADD_PROJECT,
      payload: res,
    })
  );
};

export const INIT_TODOS = 'INIT_TODOS';
export const initTodos = (projectId) => (dispatch) => {
  request(`/projects/${projectId}/tasks/`).then((res) =>
    dispatch({ type: INIT_TODOS, payload: res })
  );
};

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (projectId, todo) => (dispatch) => {
  request(`/projects/${projectId}/tasks/`, 'POST', todo).then((res) =>
    dispatch({ type: ADD_TODO, payload: res })
  );
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (projectId, todo) => (dispatch) => {
  request(`/projects/${projectId}/tasks/${todo.id}/`, 'PUT', {
    id: todo.id,
    name: todo.name,
    description: todo.description,
    priority: todo.priority,
    completed: !todo.completed,
    projectId: parseInt(projectId),
  }).then((res) => dispatch({ type: TOGGLE_TODO, payload: todo.id }));
};

export const SORT_TODOS = 'SORT_TODOS';
export const sortTodos = (param) => ({
  type: SORT_TODOS,
  payload: param,
});

export const CHANGE_THEME = 'CHANGE_THEME';
export const changeTheme = () => ({
  type: CHANGE_THEME,
});
