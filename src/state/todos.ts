import {
  ADD_TODO,
  AddTodoAction,
  TOGGLE_TODO,
  ToggleTodoAction,
  createTodoId,
} from '../actions';
import { Todo } from '../types';

const createTodo = ({ id, text }: AddTodoAction): Todo => ({
  completed: false,
  id,
  text,
});

const toggleTodo = (state: Todo, action: ToggleTodoAction): Todo => {
  if (state.id !== action.id) {
    return state;
  }
  return {
    ...state,
    completed: !state.completed,
  };
};

const initialData: Todo[] = [{
  id: createTodoId(),
  text: '最初のTODO',
  completed: false
}, {
  id: createTodoId(),
  text: '２個めのTODO',
  completed: false
}];

const todos = (state: Todo[] = initialData, action: AddTodoAction | ToggleTodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        createTodo(action),
      ];
    case TOGGLE_TODO:
      return state.map((t) =>
        toggleTodo(t, action),
      );
    default:
      return state;
  }
};

export default todos;
