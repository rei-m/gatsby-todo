import React from 'react';
import { graphql } from "gatsby";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Layout from '../components/layout'
import Footer from '../components/Footer'
import SEO from '../components/seo'

// const IndexPage: React.FunctionComponent<{}> = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} description="" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} description="" />
    <h1>{data.site.siteMetadata.title}</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
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
