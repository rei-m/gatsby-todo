import React from 'react';
import { graphql } from "gatsby";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Layout from '../components/Layout'
import TodoFilter from '../components/TodoFilter'
import SEO from '../components/Seo'

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} description="Sample" />
    <h1>{data.site.siteMetadata.title}</h1>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilter />
  </Layout>
);

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
