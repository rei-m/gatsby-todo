import { Action } from 'redux';

let nextTodoId = 0;

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
  type: string;
  filter: string;
}

export interface AddTodoAction extends Action {
  type: string;
  id: number;
  text: string;
}

export interface ToggleTodoAction extends Action {
  type: string;
  id: number;
}

/*
 * action creators
 */
export function addTodo(text: string): AddTodoAction {
  return {
    id: nextTodoId++,
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
