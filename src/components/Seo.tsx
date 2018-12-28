import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { SiteMetaData } from '@src/types';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
  keywords?: string[];
  title: string;
}

export interface DefaultSEOQueryData {
  site: {
    siteMetadata: SiteMetaData;
  };
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, keywords, title }) => {
  const checkedLang: string = lang ? lang : 'en';
  const checkedKeywords: string[] = keywords ? keywords : [];
  const checkedMeta: Array<{
    name: string;
    content: string;
  }> = meta ? meta : [];

  return (
    <StaticQuery
      query={query}
      render={(data: DefaultSEOQueryData) => {
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang: checkedLang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                checkedKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: checkedKeywords.join(`, `),
                    }
                  : []
              )
              .concat(checkedMeta)}
          />
        );
      }}
    />
  );
};

export default SEO;

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
