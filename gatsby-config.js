const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${ activeEnv }`,
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Justin Bond`,
    siteUrl: `https://justinbond.dev/`,
    description: `Justin Bond is a Frontend Engineer based out of Southern California.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: `${ process.env.WORDPRESS_URL }/wp/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layouts/DefaultLayout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway:600,700`,
          `Share Tech Mono`
        ]
      }
    },
    {
      resolve: `@danbruegge/gatsby-plugin-stylelint`,
      options: {
        files: `**/*.scss`,
        context: `${__dirname}/src/scss`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-MTXN9MJ`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: `YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING`,
        // gtmPreview: `YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME`,
        // dataLayerName: `YOUR_DATA_LAYER_NAME`
      },
    },
  ],
};
