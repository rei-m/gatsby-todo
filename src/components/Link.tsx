import * as React from 'react';

export interface LinkProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const Link: React.FunctionComponent<LinkProps> = ({children, active, onClick}) => {

  if (active) {
    return <span>{children}</span>;
  }

  const handleOnClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href='#' onClick={handleOnClick}>
      {children}
    </a>
  );
};

export default Link;
