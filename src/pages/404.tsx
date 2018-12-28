import * as React from 'react';
import Layout from '@src/components/Layout'
import SEO from '@src/components/Seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="Not Found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
