import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-home-other-work`;

const HomeOtherWork = (props) => {
  const {
    otherProjects
  } = props;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const bullet = '//';

  const renderOtherWork = (key) => {
    const work = key.node;

    return (
      <li key={work.slug}><AnchorLink to={`/project/${work.slug}`} className={'code-color-blue'}>{ work.title }</AnchorLink></li>
    );
  };

  return (
    <div className={rootClassnames}>
      <div className={`${ns}__text`}>
        <span>{bullet}</span>
        {` Other Work`}
      </div>
      <ul className={`${ns}__items`}>
        {otherProjects.map(renderOtherWork)}
      </ul>
    </div>
  );
};

HomeOtherWork.propTypes = {
  otherProjects: PropTypes.arrayOf(PropTypes.shape({}))
};

HomeOtherWork.defaultProps = {
  otherProjects: null
};

export default HomeOtherWork;
