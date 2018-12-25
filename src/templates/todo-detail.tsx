import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
// import Helmet from 'react-helmet';

// const TodoDetailInterface {
//   data
// }

const Template = (props) => {
  console.dir(props);
  return (
    <div>
      <div>
        <h1>{props.pageContext.name}</h1>
      </div>
    </div>
  );
};

export default Template;
