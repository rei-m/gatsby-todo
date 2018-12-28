import React from 'react';
import { graphql } from "gatsby";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Layout from '../components/Layout'
import TodoFilter from '../components/TodoFilter'
import SEO from '../components/Seo'
import { SiteMetaData } from '../types';

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: Pick<SiteMetaData, 'title' | 'description'>
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO
      title={data.site.siteMetadata.title}
      keywords={[`gatsby`, `application`, `react`]}
      description={data.site.siteMetadata.description}
    />
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
        description
      }
    }
  }
`;
