import React from 'react';
import { graphql } from "gatsby";
import { GeneratedPageComponentProps, Todo } from '../types';
import { TodosPage } from '../pages/todos';

type TodosTemplateProps = GeneratedPageComponentProps<{ todo: Todo }> & {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const TodosTemplate: React.FC<TodosTemplateProps> = (props) => (
  <TodosPage todo={props.pageContext.todo} { ...props } />
);

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
