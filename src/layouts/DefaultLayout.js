import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

const nsBase = 'layout';
const ns = `${nsBase}-default`;

const DefaultLayout = (props) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  const {
    children
  } = props;

  return (
    <div className={rootClassnames}>
      <Helmet defaultTitle="Justin Bond" titleTemplate="%s | Justin Bond">
        <meta name="description" content="Hello, I'm Justin Bond and I am a full-stack web developer from Costa Mesa, California." />
      </Helmet>
      <Header />
      <div className={`${ns}__content`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;