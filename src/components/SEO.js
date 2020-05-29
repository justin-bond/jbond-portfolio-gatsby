import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
  page,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = `${ site.siteMetadata.title } | Front-End Engineer/Developer`;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${ site.siteMetadata.title }`}
      bodyAttributes={
        {
          'data-page': page || title || site.siteMetadata.title
        }
      }
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title ? `${ title } | ${ site.siteMetadata.title }` : defaultTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title ? `${ title } | ${ site.siteMetadata.title }` : defaultTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

export default SEO;
