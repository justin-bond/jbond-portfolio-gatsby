import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Contact from '../components/Contact';
import Container from '../components/Container';

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
      <Container size={'small'}>
        <div className={`${ns}__project`}>
          {project.title}
        </div>
        <Contact />
      </Container>
    </div>
  );
};

projectTemplate.propTypes = {
  data: PropTypes.shape({
    projectsJson: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string
    }),
  }),
};

projectTemplate.defaultProps = {
  data: null
};

export const query = graphql`
  query($id: String!) {
    projectsJson(id: { eq: $id }) {
      title,
      slug
    }
  }
`;

export default projectTemplate;
