import * as React from 'react';

export interface AddTodoFormProps extends React.Props<{}> {
  onSubmit: (name: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onSubmit }) => {

  let textInput: HTMLInputElement;

  const setTextInput = (input: HTMLInputElement) => {
    textInput = input;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textInput.value.trim()) {
      return;
    }
    onSubmit(textInput.value);
    textInput.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        ref={setTextInput}
      />
      <button type='submit'>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
