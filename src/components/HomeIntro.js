import React from 'react';
import classNames from 'classnames';

import Container from './Container';

const nsBase = 'component';
const ns = `${nsBase}-home-intro`;

const HomeIntro = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  return (
    <Container size={'small'}>
      <div className={rootClassnames}>
        <h1 className={`${ns}__text`}>
          Hello, I‘m Justin Bond and I am a Front-End Web Developer in Orange County, CA.
        </h1>
        <ul className={`${ns}__bullets`}>
          <li>
            Skilled in Wordpress, Magento, Shopify, React, PHP, and Javascript.
          </li>
          <li>
            When I am not coding I enjoy listening to music, watching football, golfing, riding motorcycles, and going on hikes with my fur child.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default HomeIntro;
