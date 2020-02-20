import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const nsBase = 'component';
const ns = `${nsBase}-container`;

const Container = (props) => {
  const {
    children,
    size
  } = props;

  const rootClassnames = classNames({
    [`${ns}`]: true,
    [`${size}`]: size
  });

  return (
    <div className={rootClassnames}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
};

Container.defaultProps = {
  children: null,
  size: null
};

export default Container;
