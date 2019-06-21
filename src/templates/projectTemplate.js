import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import AnchorLink from '../components/AnchorLink';
import Contact from '../components/Contact';
import Container from '../components/Container';
import ProjectHero from '../components/ProjectHero';
import ProjectTitle from '../components/ProjectTitle';
import ProjectExternalLink from '../components/ProjectExternalLink';
import ProjectSkills from '../components/ProjectSkills';
import ProjectAgency from '../components/ProjectAgency';

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
        <div className={`${ns}__container`}>
          <ProjectHero project={project} />
          <ProjectTitle title={project.title} />
          {project.link &&
            <ProjectExternalLink externalLink={project.link} />
          }
          {project.skills &&
            <ProjectSkills skills={project.skills} />
          }
          {project.agency &&
            <ProjectAgency agency={project.agency} />
          }
          <div className={`${ns}__home`}>
            <AnchorLink to={'/'} direction={'left'}>Back to Home</AnchorLink>
          </div>
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
      slug: PropTypes.string,
      agency: PropTypes.string,
      screentshot: PropTypes.string,
      video: PropTypes.string,
      link: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.shape({}))
    }),
  }),
};

projectTemplate.defaultProps = {
  data: null
};

export const query = graphql`
  query($id: String!) {
    projectsJson(id: { eq: $id }) {
      title
      slug
      agency
      screenshot
      video
      link
      skills {
        skill
      }
    }
  }
`;

export default projectTemplate;
