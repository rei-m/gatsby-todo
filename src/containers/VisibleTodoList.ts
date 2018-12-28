import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleTodo, VisibilityFilter, ToggleTodoAction } from '@src/actions';
import { Todo } from '@src/types';
import { GlobalState } from '@src/state/createStore';
import TodoList from '@src/components/TodoList';

const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      return [];
  }
};

const mapStateToProps = ({ todos, visibilityFilter }: GlobalState) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
});

const mapDispatchToProps = (dispatch: Dispatch<ToggleTodoAction>) => ({
  onTodoClick: (id: number) => {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
