import { Action } from 'redux';

let nextTodoId = 1;

export const createTodoId = () => nextTodoId++;

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
export const VisibilityFilter = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export interface SetVisibilityFilterAction extends Action {
  type: typeof SET_VISIBILITY_FILTER;
  payload: {
    filter: string;
  };
}

export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export interface ToggleTodoAction extends Action {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}

/*
 * action creators
 */
export function addTodo(text: string): AddTodoAction {
  return {
    type: ADD_TODO,
    payload: {
      id: createTodoId(),
      text,
    },
  };
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export function setVisibilityFilter(filter: string): SetVisibilityFilterAction {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter,
    },
  };
}
