import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Layout = (props) => {
  const {
    children
  } = props;

const nsBase = 'layout';
const ns = `${nsBase}-default`;

  return (
    <div
      className={`${nsBase} ${ns}`}
      // onLoad={() => { SmoothScrollInit(window.document); }}
    >
      <Helmet title={ `Test Site` } />
      <div className={`${ns}__header`}>
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
      </div>
      <div className={`${ns}__content`}>
        {children}
      </div>
      <div className={`${ns}__footer`}>
        Footer
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};

export default Layout;