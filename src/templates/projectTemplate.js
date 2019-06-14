import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const projectTemplate = ({ data }) => {
  const project = data.projectsJson;

  return (
    <div className="project-page">
      <Helmet title={ `${project.title} | Justin Bond` } />
        {project.title}
      <div className="blog-post">

      </div>
    </div>
  );
}

projectTemplate.propTypes = {
  data: PropTypes.shape({
    projectsJson: PropTypes.shape({
       title: PropTypes.string
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectPageTemplate($id: String!) {
    projectsJson(id: { eq: $id }) {
      title
    }
  }
`;

export default projectTemplate;