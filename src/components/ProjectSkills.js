import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-project-skills`;

const ProjectSkills = ({ skills }) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const renderSkills = (key) => {
    const {
      skill
    } = key;

    return (
      <li key={skill}>{skill}</li>
    );
  };

  return (
    <div className={rootClassnames}>
      {skills.map(renderSkills)}
    </div>
  );
};

ProjectSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({}))
};

ProjectSkills.defaultProps = {
  skills: null
};

export default ProjectSkills;
