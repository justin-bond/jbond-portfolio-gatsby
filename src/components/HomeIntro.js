import React, { useEffect } from 'react';
import classNames from 'classnames';
import { TweenMax } from 'gsap';

const nsBase = 'component';
const ns = `${nsBase}-home-intro`;

const HomeIntro = ({ intro }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  let homeIntroText = null;
  const homeIntroBullets = [];

  useEffect(() => {
    TweenMax.from(homeIntroText, 1, { opacity: 0, x: 100, delay: 0.5 });
    TweenMax.staggerFrom(homeIntroBullets, 1, {
      opacity: 0, y: 100, delay: 1, stagger: 0.5
    });
  }, []);

  return (
    <div className={rootClassnames}>
      <h1 className={`${ns}__text`} ref={(node) => { homeIntroText = node; }}>
        {intro.title}
      </h1>
      <ul className={`${ns}__bullets`}>
        {intro.bullets.map(({ bullet }, index) => {
          return (
            <li key={bullet} ref={(node) => { homeIntroBullets[index] = node; }}>
              {bullet}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeIntro;
