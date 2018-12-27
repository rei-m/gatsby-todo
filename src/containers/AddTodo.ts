import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo, AddTodoAction } from '../actions';
import AddTodoForm from '../components/AddTodoForm';

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => ({
  onSubmit: (name: string) => {
    dispatch(addTodo(name));
  }
});

const AddTodo = connect(
  undefined,
  mapDispatchToProps,
)(AddTodoForm);

export default AddTodo;
