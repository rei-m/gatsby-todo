import * as React from 'react';

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

  const handleOnClick = (e: React.SyntheticEvent<HTMLLIElement>) => {
    onClick(id);
  };

  return (
    <li
      onClick={handleOnClick}
      style={style}
    >
      {text}
    </li>
  );
};

export default Todo;
