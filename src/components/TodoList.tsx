import * as React from 'react';
import { Todo } from '@src/types';
import TodoListItem from '@src/components/TodoListItem';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => <TodoListItem
      key={todo.id}
      {...todo}
      onClick={onTodoClick}
    />)}
  </ul>
);

export default TodoList;
