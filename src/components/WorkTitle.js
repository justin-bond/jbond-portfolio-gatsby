import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-work-title`;

const WorkTitle = ({ title }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      <h1>{title}</h1>
    </div>
  );
};

WorkTitle.propTypes = {
  title: PropTypes.string
};

WorkTitle.defaultProps = {
  title: null
};

export default WorkTitle;
