import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TweenMax } from 'gsap';
import { Waypoint } from 'react-waypoint';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-home-other-work`;

const HomeOtherWork = (props) => {
  const {
    otherProjects
  } = props;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const homeOtherWorkBullets = [];
  const bullet = '//';
  const [staggered, setStaggered] = useState(false);

  const handleReveal = () => {
    if (!staggered) {
      TweenMax.staggerFrom(homeOtherWorkBullets, 1, {
        opacity: 0, x: 75, stagger: 0.2
      });
      setStaggered(true);
    }
  };

  const setScrollableAncestor = () => {
    if (typeof document !== `undefined`) {
      return window;
    }
    return null;
  };

  const renderOtherWork = (key, index) => {
    const work = key.node;

    return (
      <li
        key={work.slug}
        ref={(node) => { homeOtherWorkBullets[index] = node; }}
      >
        <AnchorLink to={`/project/${work.slug}`} className={'code-color-blue'}>
          { work.title }
        </AnchorLink>
      </li>
    );
  };

  return (
    <Waypoint
      scrollableAncestor={setScrollableAncestor()}
      onEnter={handleReveal}
      bottomOffset={'100px'}
    >
      <div className={rootClassnames}>
        <div className={`${ns}__text`}>
          <span>{bullet}</span>
          {` Other Work`}
        </div>
        <ul className={`${ns}__items`}>
          {otherProjects.map(renderOtherWork)}
        </ul>
      </div>
    </Waypoint>
  );
};

HomeOtherWork.propTypes = {
  otherProjects: PropTypes.arrayOf(PropTypes.shape({}))
};

HomeOtherWork.defaultProps = {
  otherProjects: null
};

export default HomeOtherWork;
