import * as React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

export interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onClick: (id: number) => void;
}

const Container = styled.li<{ completed: boolean }>`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const DeatilLinkWrapper = styled.span`
  margin-left: 16px;
`;

const Todo: React.FC<TodoProps> = ({
  id, text, completed, onClick
}) => {
  const handleOnClick = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    onClick(id);
  };

  return (
    <Container completed={completed}>
      <span onClick={handleOnClick}>
        {text}
      </span>
      <DeatilLinkWrapper>
        <Link to={`/todos/${id}/`}>detail</Link>
      </DeatilLinkWrapper>
    </Container>
  );
};

export default Todo;
