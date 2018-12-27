import React from 'react';
import { graphql } from "gatsby";
import { Match, MatchRenderProps } from "@reach/router"
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import NotFound from './404'
import { Todo } from '../types';
import { GlobalState } from '../state/createStore';
import { connect } from 'react-redux';

export interface TodosPageOwnProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
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

export const TodosPage: React.FC<TodosPageProps> = ({ todo }) => {
  if (todo == null) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} description="Sample" />
        <div>{todo.id}</div>
        <div>{todo.text}</div>
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
      }
    }
  }
`;
