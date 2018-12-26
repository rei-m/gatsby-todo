import React from 'react';
import { graphql } from "gatsby";
import { Router, Link, Location } from "@reach/router"
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

const AppRouter = props => (
  <Location>
    {({ location }) => (
      <Router location={location} className="router">
        {props.children}
      </Router>
    )}
  </Location>
);


export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const Page = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.id * 75}, 60%, 60%)` }}
  >
    {props.id}
  </div>
)

const Top = props => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

const IndexPage: React.FunctionComponent<IndexPageProps> = (props) => {
  console.dir(props);
  console.dir(props['*']);
  console.dir(props['pathContext']['matchPath']);
  return (
  <Layout>
    <div>unko</div>
    <Footer />
  </Layout>
);
  }
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
