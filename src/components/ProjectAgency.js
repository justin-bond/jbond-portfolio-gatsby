import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-project-agency`;

const ProjectAgency = ({ agency }) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      {`* a ${agency} project.`}
    </div>
  );
};

ProjectAgency.propTypes = {
  agency: PropTypes.string
};

ProjectAgency.defaultProps = {
  agency: null
};

export default ProjectAgency;
