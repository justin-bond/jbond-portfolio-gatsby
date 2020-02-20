import React, { useEffect } from 'react';
import classNames from 'classnames';
import { TweenMax } from 'gsap';

const nsBase = 'component';
const ns = `${nsBase}-home-intro`;

const HomeIntro = () => {
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
        Hello, I‘m Justin Bond and I am a Front-End Web Developer in Orange County, CA.
      </h1>
      <ul className={`${ns}__bullets`}>
        <li ref={(node) => { homeIntroBullets[0] = node; }}>
          Skilled in Wordpress, Magento, Shopify, React, PHP, and Javascript.
        </li>
        <li ref={(node) => { homeIntroBullets[1] = node; }}>
          When I am not coding I enjoy listening to music, watching football, golfing, riding motorcycles, and going on hikes with my fur child.
        </li>
      </ul>
    </div>
  );
};

export default HomeIntro;
