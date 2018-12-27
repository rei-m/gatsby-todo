import React from 'react';
import { graphql } from "gatsby";
import { StaticPageComponentProps, Todo } from '../types';
import { TodosPage } from '../pages/todos';

type TodoTemplateProps = StaticPageComponentProps<{ todo: Todo }> & {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const TodoTemplate: React.FC<TodoTemplateProps> = (props) => {
  console.dir(props);
  const { todo } = props.pageContext;
  return (
    <TodosPage todo={todo} { ...props } />
  );
};

export default TodoTemplate;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
