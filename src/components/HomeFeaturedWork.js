import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AnchorLink from './AnchorLink';
import Reveal from './Reveal';

const nsBase = 'component';
const ns = `${nsBase}-home-featured-work`;

const HomeFeaturedWork = ({ featuredWork }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const renderFeaturedWork = (work) => {
    const sectionStyle = {
      backgroundImage: `url(${work.featuredImage.node.sourceUrl}`
    };

    return (
      <Reveal key={work.slug}>
        <div className={`${ns}__item ${ns}__item-${work.slug}`}>
          <AnchorLink to={`/work/${work.slug}`}>
            <div className={`${ns}__item--logo`}>
              <img src={work.acfProjectDetails.logo.sourceUrl} alt={work.acfProjectDetails.logo.title} />
            </div>
            <div className={`${ns}__item--hover`} style={sectionStyle}>
              {work.title}
            </div>
          </AnchorLink>
        </div>
      </Reveal>
    );
  };

  return (
    <div id={'featured-work'} className={rootClassnames}>
      <h1 className={`${ns}__text`}>
        Featured Work
      </h1>
      <div className={`${ns}__items`}>
        {featuredWork.map((work) => { return renderFeaturedWork(work); })}
      </div>
    </div>
  );
};

HomeFeaturedWork.propTypes = {
  featuredWork: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.shape({
    hash: PropTypes.string
  })
};

HomeFeaturedWork.defaultProps = {
  featuredWork: null,
  location: null
};

export default HomeFeaturedWork;
