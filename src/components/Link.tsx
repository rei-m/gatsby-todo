import * as React from 'react';

export interface LinkProps {
  active: boolean;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ children, active, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const handleOnClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="#" onClick={handleOnClick}>
      {children}
    </a>
  );
};

export default Link;
