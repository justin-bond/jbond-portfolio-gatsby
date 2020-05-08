import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TweenMax } from 'gsap';

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

  library.add(fab);

  let defaultLayout = null;

  useEffect(() => {
    TweenMax.to(defaultLayout, 1, { opacity: 1 });
  }, []);

  return (
    <div className={rootClassnames} ref={(node) => { defaultLayout = node; }}>
      <Helmet defaultTitle={'Justin Bond'} titleTemplate={'%s | Justin Bond'}>
        <html lang={'en'} />
        <meta
          name={'description'}
          content={'Hello, I‘m Justin Bond and I am a Front-End Engineer based out of Orange County, CA.'}
        />
      </Helmet>
      <Header />
      <div className={`${ns}__content`}>
        {children}
      </div>
      <Footer />
      <div
        id={'overlay'}
        style={{
          position: 'fixed',
          zIndex: 9999,
          top: 0,
          left: 0,
          backgroundColor: '#191919',
          width: '100vw',
          height: '100vh',
          transform: 'translateX(-100%)'
        }}
      />
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
