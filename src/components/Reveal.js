import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

const nsBase = 'component';
const ns = `${nsBase}-reveal`;

const Container = (props) => {
  const {
    children,
    bottomOffset
  } = props;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const [revealState, setRevealState] = useState(false);

  const handleReveal = () => {
    setRevealState(!revealState);
  };

  return (
    <Waypoint scrollableAncestor={window} onEnter={handleReveal} onLeave={handleReveal} bottomOffset={bottomOffset}>
      <div className={rootClassnames} data-reveal={revealState}>
        {children}
      </div>
    </Waypoint>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  bottomOffset: PropTypes.string
};

Container.defaultProps = {
  children: null,
  bottomOffset: '100px'
};

export default Container;
