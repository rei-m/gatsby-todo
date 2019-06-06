import * as React from 'react';
import { graphql } from 'gatsby';
import { SiteMetaData } from '@src/types';
import AddTodo from '@src/containers/AddTodo';
import VisibleTodoList from '@src/containers/VisibleTodoList';
import Layout from '@src/components/Layout';
import TodoFilter from '@src/components/TodoFilter';
import SEO from '@src/components/Seo';

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: Pick<SiteMetaData, 'title' | 'description'>;
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => (
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

export default IndexPage;

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
