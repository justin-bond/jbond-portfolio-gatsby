import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const nsBase = 'template';
const ns = `${nsBase}-project`;

const projectTemplate = ({ data }) => {
  const project = data.projectsJson;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
    [`${ns}--${project.slug}`]: project.slug,
  });


  return (
    <div className={rootClassnames}>
      <Helmet>
        <title>{project.title}</title>
      </Helmet>
      {project.title}
      <div className="blog-post">

      </div>
    </div>
  );
}

projectTemplate.propTypes = {
  data: PropTypes.shape({
    projectsJson: PropTypes.shape({
       title: PropTypes.string,
       slug: PropTypes.string
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectPageTemplate($id: String!) {
    projectsJson(id: { eq: $id }) {
      title,
      slug
    }
  }
`;

export default projectTemplate;