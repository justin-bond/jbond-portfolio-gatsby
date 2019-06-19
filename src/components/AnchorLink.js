import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const nsBase = 'component';
const ns = `${nsBase}-link`;

const AnchorLink = (props) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const {
    children,
    cover,
    direction,
    target,
    to
  } = props;

  let RenderedAnchorLink = null;

  const isExternalUrl = () => {
    let isExternal = false;

    if (to && (to.includes('//') || to.match(/((^(mailto|tel|sms|mms):)|www.)/))) {
      isExternal = true;
    }

    return isExternal;
  };

  let targetOption = target;
  // if linking to external resource AND target prop is null
  // set the anchor target attribute to "_blank" by default
  if (isExternalUrl && !target) {
    targetOption = '_blank';
  }

  if (isExternalUrl()) {
    RenderedAnchorLink = (
      <a className={rootClassnames} href={to} target={targetOption} aria-label={'external link'} rel={'noopener noreferrer'}>
        {children}
      </a>
    );
  } else if (!cover) {
    RenderedAnchorLink = (
      <Link className={rootClassnames} to={to}>
        {children}
      </Link>
    );
  } else {
    RenderedAnchorLink = (
      <AniLink
        className={rootClassnames}
        to={to}
        cover
        bg={'#191919'}
        direction={direction}
        duration={1}
      >
        {children}
      </AniLink>
    );
  }

  return RenderedAnchorLink;
};

AnchorLink.propTypes = {
  children: PropTypes.node,
  cover: PropTypes.bool,
  direction: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string.isRequired
};

AnchorLink.defaultProps = {
  children: null,
  cover: true,
  direction: 'right',
  target: null,
  to: null
};

export default AnchorLink;
