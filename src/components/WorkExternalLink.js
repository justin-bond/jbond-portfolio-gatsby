import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-work-external-link`;

const WorkExternalLink = ({ externalLink }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      <AnchorLink to={externalLink} target={'_blank'}>Website Link</AnchorLink>
    </div>
  );
};

WorkExternalLink.propTypes = {
  externalLink: PropTypes.string
};

WorkExternalLink.defaultProps = {
  externalLink: null
};

export default WorkExternalLink;
