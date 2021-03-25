import React, { useState } from 'react';
import classNames from 'classnames';
import { TweenMax } from 'gsap';
import { Waypoint } from 'react-waypoint';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-home-other-work`;

const HomeOtherWork = ({ otherWork }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
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
          {otherWork.map((work, index) => {
            return (
              <li
                key={work.slug}
                ref={(node) => { homeOtherWorkBullets[index] = node; }}
              >
                <AnchorLink to={`/work/${work.slug}`} className={'code-color-blue'}>
                  { work.title }
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Waypoint>
  );
};

export default HomeOtherWork;
