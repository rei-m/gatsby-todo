import * as React from 'react';
import { Link } from 'gatsby'

export interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onClick: (id: number) => void;
}

const Todo: React.FunctionComponent<TodoProps> = ({
  id, text, completed, onClick
}) => {

  const style = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  const handleOnClick = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    onClick(id);
  };

  return (
    <li style={style}>
      <span onClick={handleOnClick}>
        {text}
      </span>
      <span style={ { marginLeft: 16 } }>
        <Link to={`/todo/${id}/`}>詳細</Link>
      </span>
    </li>
  );
};

export default Todo;
