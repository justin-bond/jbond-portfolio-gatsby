import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-work-skills`;

const WorkSkills = ({ skills }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
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

WorkSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({}))
};

WorkSkills.defaultProps = {
  skills: null
};

export default WorkSkills;
