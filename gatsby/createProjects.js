const path = require(`path`);

module.exports = async ({ gatsbyUtilities }) => {
  const GET_PROJECTS = `
    query WpProjects {
      allWpProject {
        nodes {
          id
          uri
          slug
        }
      }
    }
  `;

  const fetchProjects = async (variables) => {
    const projectsResult = await gatsbyUtilities.graphql(GET_PROJECTS, variables).then(({ data }) => {
      // console.log('data: ', data);
      const {
        allWpProject: {
          nodes,
        },
      } = data;

      // eslint-disable-next-line no-console
      console.log(`Project count: ${ nodes.length }`);

      return nodes;
    });

    return projectsResult;
  };

  await fetchProjects().then((projects) => {
    return Promise.all(
      // Create Individual project pages
      projects.map((project) => {
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        return gatsbyUtilities.actions.createPage({
          // Use the WordPress uri as the Gatsby page path
          // This is a good idea so that internal links and menus work 👍
          path: `/work/${ project.slug }`,

          // use the blog page template as the page component
          component: path.resolve(`./src/templates/workTemplate.js`),

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // we need to add the project id here
            // so our project template knows which project
            // the current project is (when you open it in a browser)
            id: project.id,
          },
        });
      })
    );
  });
};
