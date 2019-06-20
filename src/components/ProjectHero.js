import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-project-hero`;

const ProjectHero = ({ project }) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      <div className={`${ns}__image`}>
        <img src={project.screenshot} alt={project.slug} />
      </div>
    </div>
  );
};

ProjectHero.propTypes = {
  project: PropTypes.shape({})
};

ProjectHero.defaultProps = {
  project: null
};

export default ProjectHero;
