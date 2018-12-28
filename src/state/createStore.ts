import { combineReducers, createStore as reduxCreateStore, Reducer } from 'redux';
import todos from '@src/state/todos';
import visibilityFilter from '@src/state/visibilityFilter';
import { Todo } from '@src/types';

export interface GlobalState {
  readonly todos: Todo[];
  readonly visibilityFilter: string;
}

const reducer: Reducer<GlobalState> = combineReducers<GlobalState>({
  todos,
  visibilityFilter,
});

const createStore = () => reduxCreateStore(reducer);

export default createStore;
