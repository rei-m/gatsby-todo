import * as React from 'react';
import { connect } from 'react-redux';
import { graphql } from "gatsby";
import { Match, MatchRenderProps } from "@reach/router"
import { SiteMetaData, Todo } from '@src/types';
import { GlobalState } from '@src/state/createStore';
import Layout from '@src/components/Layout'
import SEO from '@src/components/Seo'
import NotFound from '@src/pages/404'

export interface TodosPageOwnProps {
  data: {
    site: {
      siteMetadata: Pick<SiteMetaData, 'title' | 'description'>
    }
  }
}

export interface TodosPageConnectedProps {
  todo?: Todo;
}

export interface TodosPageMatchParams {
  todoId: string;
}

export type TodosPageProps = TodosPageOwnProps & TodosPageConnectedProps;

export const TodosPage: React.FC<TodosPageProps> = ({ data, todo }) => {
  if (todo == null) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO
        title={`${data.site.siteMetadata.title}`}
        keywords={[`gatsby`, `application`, `react`]}
        description={data.site.siteMetadata.description}
      />
      <div>{`id: ${todo.id}`}</div>
      <div>{`text: ${todo.text}`}</div>
      <div>{`completed: ${todo.completed}`}</div>
    </Layout>
  );
};

const getTodo = (todos: Todo[], todoId: number): Todo | undefined => {
  return todos.find(todo => todo.id === todoId);
};

const mapStateToProps = ({ todos }: GlobalState, { todoId }: TodosPageMatchParams) => ({
  todo: getTodo(todos, Number(todoId))
});

const ConnectedTodosPage = connect(mapStateToProps)(TodosPage);

const MatchTodosPage: React.FC<TodosPageOwnProps> = (props) => (
  <Match path="/todos/:todoId">
    {({ match }: MatchRenderProps<TodosPageMatchParams>) => match && (
      <ConnectedTodosPage todoId={match.todoId} { ...props } />
    )}
  </Match>
);

export default MatchTodosPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
