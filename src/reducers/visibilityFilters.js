import { SET_VISIBILITY_FILTER } from '../actions/actions';
import { ALL } from '../utils/constants'

export function visibilityFilter(state = ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
