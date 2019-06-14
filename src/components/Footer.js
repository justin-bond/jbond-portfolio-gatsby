import React from 'react';
import classNames from 'classnames';

const nsBase = 'component';
const ns = `${nsBase}-footer`;

const Footer = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });
  const date = (new Date()).getFullYear();

  return (
    <footer className={rootClassnames}>
      Justin Bond© {date}
    </footer>
  )
};

export default Footer;