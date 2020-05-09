import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-work-agency`;

const WorkAgency = ({ agency }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      {`* a ${agency} project.`}
    </div>
  );
};

WorkAgency.propTypes = {
  agency: PropTypes.string
};

WorkAgency.defaultProps = {
  agency: null
};

export default WorkAgency;
