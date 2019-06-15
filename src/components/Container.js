import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const nsBase = 'component';
const ns = `${nsBase}-container`;

const Container = (props) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const {
    children
  } = props;

  return (
    <div className={rootClassnames}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

Container.defaultProps = {
  children: null
};

export default Container;
