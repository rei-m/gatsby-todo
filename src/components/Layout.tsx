import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { SiteMetaData } from '@src/types';
import Header from '@src/components/Header';

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

export interface LayoutProps {
  children: React.ReactNode;
}

export interface SiteTitleQueryData {
  site: {
    siteMetadata: Pick<SiteMetaData, 'title'>;
  };
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header siteTitle={useStaticQuery<SiteTitleQueryData>(query).site.siteMetadata.title} />
    <Main>{children}</Main>
  </>
);

export default Layout;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
