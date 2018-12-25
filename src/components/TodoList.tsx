import * as React from 'react';
import { Todo } from '../types';
import TodoView from './Todo';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => <TodoView
      key={todo.id}
      {...todo}
      onClick={onTodoClick}
    />)}
  </ul>
);

export default TodoList;
