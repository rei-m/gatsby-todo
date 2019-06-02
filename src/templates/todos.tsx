import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GeneratedPageComponentProps, SiteMetaData, Todo } from '@src/types';
import { TodosPage } from '@src/pages/todos';

type TodosTemplateProps = GeneratedPageComponentProps<{ todo: Todo }>;

export interface SiteTitleQueryData {
  site: {
    siteMetadata: Pick<SiteMetaData, 'title' | 'description'>;
  };
}

const TodosTemplate: React.FC<TodosTemplateProps> = props => (
  <TodosPage todo={props.pageContext.todo} data={useStaticQuery<SiteTitleQueryData>(query)} />
);

export default TodosTemplate;

const query = graphql`
  query TodosTemplateQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
