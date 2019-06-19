import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AnchorLink from './AnchorLink';
import Container from './Container';

const nsBase = 'component';
const ns = `${nsBase}-home-recent-work`;

const HomeRecentWork = (props) => {
  const {
    recentProjects
  } = props;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const renderRecentWork = (key) => {
    const work = key.node;
    const sectionStyle = {
      backgroundImage: `url(${work.screenshot}`
    };

    return (
      <div className={`${ns}__item`} key={work.slug}>
        <AnchorLink to={`/project/${work.slug}`}>
          <div className={`${ns}__item--logo`}>
            <img src={work.logo} alt={'company_logo'} />
          </div>
          <div className={`${ns}__item--hover`} style={sectionStyle}>
            { work.title }
          </div>
        </AnchorLink>
      </div>
    );
  };

  return (
    <Container size={'small'}>
      <div className={rootClassnames}>
        <h1 className={`${ns}__text`}>
          Recent Work
        </h1>
        <div className={`${ns}__items`}>
          {recentProjects.map(renderRecentWork)}
        </div>
      </div>
    </Container>
  );
};

HomeRecentWork.propTypes = {
  recentProjects: PropTypes.arrayOf(PropTypes.shape({}))
};

HomeRecentWork.defaultProps = {
  recentProjects: null
};

export default HomeRecentWork;
