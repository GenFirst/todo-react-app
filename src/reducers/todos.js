import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/actions';
import uuid from 'uuid/v4';

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {value: action.todo, finished: false, id: uuid() }
      ]
    case DELETE_TODO:
      let newTodos = state.slice();
      let filtered = newTodos.findIndex(todo => todo.id === action.todoId);
      if (filtered < 0) {
        return newTodos;
      } else {
        newTodos.splice(filtered, 1);
        return newTodos;
      }
    case UPDATE_TODO:
      let copiedTodos = state.slice();
      let updatedTodo = copiedTodos.find(todo => todo.id === action.todoId);
      if (updatedTodo) {
        updatedTodo.value = action.todo.value;
        updatedTodo.finished = action.todo.isFinished;
      }

      return copiedTodos;
    default:
      return state
  }
}
