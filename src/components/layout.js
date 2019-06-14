import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const nsBase = 'component';
const ns = `${nsBase}-layout`;

const Layout = (props) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  const {
    children
  } = props;

  return (
    <div className={rootClassnames}>
      <Helmet title={ `Justin Bond` } description={`Hello, I'm Justin Bond and I am a full-stack web developer from Costa Mesa, California.`} />
      <Header />
      <div className={`${ns}__content`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;