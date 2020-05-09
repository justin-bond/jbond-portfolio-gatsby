import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { animateScroll } from 'react-scroll';

import AnchorLink from './AnchorLink';
import Reveal from './Reveal';

const nsBase = 'component';
const ns = `${nsBase}-home-recent-work`;

const HomeRecentWork = (props) => {
  const {
    recentProjects,
    location
  } = props;

  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (hash === 'recent-work') {
      const anchorPosition = document.getElementById(hash).getBoundingClientRect();
      animateScroll.scrollTo(anchorPosition.top + window.scrollY);
    }
  }, []);

  const renderRecentWork = (key) => {
    const work = key.node;
    const sectionStyle = {
      backgroundImage: `url(${work.screenshot}`
    };

    return (
      <Reveal key={work.slug}>
        <div className={`${ns}__item ${ns}__item-${work.slug}`}>
          <AnchorLink to={`/work/${work.slug}`}>
            <div className={`${ns}__item--logo`}>
              <img src={work.logo} alt={'company_logo'} />
            </div>
            <div className={`${ns}__item--hover`} style={sectionStyle}>
              { work.title }
            </div>
          </AnchorLink>
        </div>
      </Reveal>
    );
  };

  return (
    <div id={'recent-work'} className={rootClassnames}>
      <h1 className={`${ns}__text`}>
        Recent Work
      </h1>
      <div className={`${ns}__items`}>
        {recentProjects.map(renderRecentWork)}
      </div>
    </div>
  );
};

HomeRecentWork.propTypes = {
  recentProjects: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.shape({})
};

HomeRecentWork.defaultProps = {
  recentProjects: null,
  location: null
};

export default HomeRecentWork;
