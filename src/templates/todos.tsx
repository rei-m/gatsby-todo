import React from 'react';
import { graphql } from "gatsby";
import { StaticPageComponentProps, Todo } from '../types';
import { TodosPage } from '../pages/todos';

type TodosTemplateProps = StaticPageComponentProps<{ todo: Todo }> & {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const TodosTemplate: React.FC<TodosTemplateProps> = (props) => {
  const { todo } = props.pageContext;
  return (
    <TodosPage todo={todo} { ...props } />
  );
};

export default TodosTemplate;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
