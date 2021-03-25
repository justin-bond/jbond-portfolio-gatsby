import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
  page,
  image
}) {
  const { site, wp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        wp {
          generalSettings {
            title
            description
          }
        }
      }
    `
  );

  const siteTitle = wp.generalSettings.title || site.siteMetadata.title;
  const siteTagline = wp.generalSettings.description;
  const defaultTitle = siteTagline ? `${ siteTitle } | ${ siteTagline } ` : siteTitle;
  const defaultImage = `${ site.siteMetadata.siteUrl }/assets/jb-logo-black.jpg`;

  const metaTitle = title || siteTitle;
  const metaDescription = description ? description.replace(/(<([^>]+)>)/ig, '') : site.siteMetadata.description;
  const metaImage = image || defaultImage;
  const metaUrl = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${ siteTitle }`}
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
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          name: `og:image`,
          content: metaImage
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
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: metaImage
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
