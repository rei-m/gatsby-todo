import { Action } from 'redux';

let nextTodoId = 0;

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
  filter: string;
}

export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodoAction extends Action {
  type: typeof TOGGLE_TODO;
  id: number;
}

/*
 * action creators
 */
export function addTodo(text: string): AddTodoAction {
  return {
    id: createTodoId(),
    text: text,
    type: ADD_TODO,
  };
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    id: id,
    type: TOGGLE_TODO,
  };
}

export function setVisibilityFilter(filter: string): SetVisibilityFilterAction {
  return {
    filter: filter,
    type: SET_VISIBILITY_FILTER,
  };
}
