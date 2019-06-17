import React from 'react';
import PropTypes from 'prop-types';
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

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

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

DefaultLayout.propTypes = {
  children: PropTypes.node
};

DefaultLayout.defaultProps = {
  children: null
};

export default DefaultLayout;