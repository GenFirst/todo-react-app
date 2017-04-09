export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
};

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export function addTodo(newTodo) {
  return { type: ADD_TODO, todo: newTodo };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, todoId: id };
}

export function editTodo(id, todo) {
  return { type: UPDATE_TODO, todoId: id, todo: todo };
}
