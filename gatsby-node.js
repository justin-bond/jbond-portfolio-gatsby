const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

const queryReferences = {
  projectDetailPage: {
    template: 'projectTemplate.js',
    pathPrefix: 'work',
    queryAll: 'allProjectsJson',
    querySingle: 'projectsJson',
  },
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageGenerators = [];

  // BEGIN page creation
  const projectDetailPage = queryReferences.projectDetailPage;
  const projectDetailPageGenerator = createPageFactory(graphql, createPage, projectDetailPage.template, projectDetailPage.queryAll, projectDetailPage.pathPrefix);
  pageGenerators.push(projectDetailPageGenerator);
  // END page creation

  return Promise.all(pageGenerators);
};

const createPageFactory = (graphql, createPage, templateSrc, querySignature, pathPrefix) => {
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`./src/templates/${ templateSrc }`);

    resolve(
      graphql(`
        {
          ${ querySignature } {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `)
        .then((result) => {
          if (result.errors) {
            reject(result.errors);
          }

          const entries = result.data[querySignature].edges;
          entries.forEach(({ node }) => {
            const internalPath = `${pathPrefix}/${node.slug}`;
            const id = node.id

            createPage({
              path: `/${internalPath}/`,
              component: pageTemplate,
              context: {
                slug: node.slug,
                id
              },
            });
          });
        })
    );
  });
};

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }