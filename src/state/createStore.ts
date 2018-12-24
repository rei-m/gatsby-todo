import {
  createStore as reduxCreateStore,
  combineReducers,
  Reducer
} from "redux"
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { Todo } from "../types";

export interface GlobalState {
  readonly todos: Todo[];
  readonly visibilityFilter: string;
}

const reducer: Reducer<GlobalState> = combineReducers<GlobalState>({
  todos,
  visibilityFilter,
});

const createStore = () => reduxCreateStore(reducer)

export default createStore
