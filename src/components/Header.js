import React from 'react';
import classNames from 'classnames';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const nsBase = 'component';
const ns = `${nsBase}-header`;

const Header = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  return (
    <header className={rootClassnames}>
      <AniLink
        to="/"
        cover
        bg="#000"
        direction="left"
        duration={1}
      >
        Home
      </AniLink>
      <br />
      Header
    </header>
  )
};

export default Header;