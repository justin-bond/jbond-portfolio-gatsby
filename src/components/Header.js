import React from 'react';
import classNames from 'classnames';

import AnchorLink from './AnchorLink';
import Container from './Container';
import Nav from './Nav';

import logo from '../../static/assets/jb-logo.svg';

const nsBase = 'component';
const ns = `${nsBase}-header`;

const Header = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  return (
    <header className={rootClassnames}>
      <Container>
        <AnchorLink
          to={'/'}
          direction={'left'}
        >
          <img src={logo} className={`${ns}__logo`} alt={'logo'} />
        </AnchorLink>
      </Container>
      <Nav />
    </header>
  );
};

export default Header;
