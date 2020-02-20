import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-project-external-link`;

const ProjectExternalLink = ({ externalLink }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  return (
    <div className={rootClassnames}>
      <AnchorLink to={externalLink} target={'_blank'}>Website Link</AnchorLink>
    </div>
  );
};

ProjectExternalLink.propTypes = {
  externalLink: PropTypes.string
};

ProjectExternalLink.defaultProps = {
  externalLink: null
};

export default ProjectExternalLink;
