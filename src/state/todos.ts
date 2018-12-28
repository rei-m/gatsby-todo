import { createTodoId, AddTodoAction, ADD_TODO, ToggleTodoAction, TOGGLE_TODO } from '@src/actions';
import { Todo } from '@src/types';

export const initialData: Todo[] = [
  {
    id: createTodoId(),
    text: 'first todo.',
    completed: true,
  },
  {
    id: createTodoId(),
    text: 'second todo.',
    completed: false,
  },
];

const todos = (state: Todo[] = initialData, action: AddTodoAction | ToggleTodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.payload.id,
          text: action.payload.text,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
