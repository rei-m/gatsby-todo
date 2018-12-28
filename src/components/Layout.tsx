import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { SiteMetaData } from '../types';
import Header from './Header'
import './normalize.css'
import './layout.css'

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

export interface LayoutProps {
  children: React.ReactNode;
}

export interface SiteTitleQueryData {
  site: {
    siteMetadata: Pick<SiteMetaData, 'title'>
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site }: SiteTitleQueryData) => (
      <>
        <Header siteTitle={site.siteMetadata.title} />
        <Main>{children}</Main>
      </>
    )}
  />
)

export default Layout

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
