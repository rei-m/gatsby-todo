import { SetVisibilityFilterAction } from '../actions';

const visibilityFilter = (state = 'SHOW_ALL', action: SetVisibilityFilterAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
