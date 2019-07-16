import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import { TimelineMax, Power1 } from 'gsap';

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

  const horizontalAnimation = ({ length }) => {
    const directionTo = direction === 'left' ? '-100%' : '100%';
    const directionFrom = direction === 'left' ? '100%' : '-100%';

    return new TimelineMax()
      .set(document.getElementById('overlay'), { x: directionFrom })
      .to(document.getElementById('overlay'), length / 2, {
        x: '0%',
        ease: Power1.easeInOut,
      })
      .to(document.getElementById('overlay'), length / 2, {
        x: directionTo,
        ease: Power1.easeIn,
      });
  };

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
      <TransitionLink
        className={rootClassnames}
        to={to}
        exit={{
          length: 1,
          trigger: ({ exit }) => { horizontalAnimation(exit); },
          state: { test: 'exit state' },
        }}
        entry={{
          delay: 0.5
        }}
      >
        {children}
      </TransitionLink>
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
