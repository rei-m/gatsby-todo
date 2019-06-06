import * as React from 'react';
import styled from 'styled-components';

export interface AddTodoFormProps extends React.Props<{}> {
  onSubmit: (name: string) => void;
}

const Container = styled.form`
  padding: 16px;
`;

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
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
    <Container onSubmit={handleSubmit}>
      <input type="text" ref={setTextInput} />
      <button type="submit">Add Todo</button>
    </Container>
  );
};

export default AddTodoForm;
