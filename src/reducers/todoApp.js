import { todos } from './todos';
import { visibilityFilter } from './visibilityFilters';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
