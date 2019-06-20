import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-project-title`;

const ProjectTitle = ({ title }) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      <h1>{title}</h1>
    </div>
  );
};

ProjectTitle.propTypes = {
  title: PropTypes.string
};

ProjectTitle.defaultProps = {
  title: null
};

export default ProjectTitle;
