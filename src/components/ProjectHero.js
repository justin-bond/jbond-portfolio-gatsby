import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-project-hero`;

const ProjectHero = ({ project }) => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const [projectHeroState, setProjectHeroState] = useState({
    videoVisible: false
  });

  const hideShowVideo = () => {
    setProjectHeroState((prevState) => {
      return { ...prevState, videoVisible: !projectHeroState.videoVisible };
    });
  };

  const renderProjectHeroImage = () => {
    return (
      <img src={project.screenshot} alt={project.slug} />
    );
  };

  const renderProjectHeroVideo = () => {
    if (projectHeroState.videoVisible) {
      return (
        <div className={`${ns}__video`}>
          <div className={`${ns}__video-container video-aspect`}>
            <iframe
              src={`https://player.vimeo.com/video/${project.video}?autoplay=1&title=0&byline=0&portrait=0`}
              width={'640'}
              height={'360'}
              frameBorder={'0'}
              title={'video'}
              allowFullScreen
            />
            <button className={`${ns}__video-link close`} type={'button'} onClick={hideShowVideo}>
              Exit Video
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={`${ns}__video image`}>
        {renderProjectHeroImage()}
        <div className={`${ns}__video-container`}>
          <div className={`${ns}__video-content`}>
            <div className={`${ns}__video-title`}>
              Website Overview
            </div>
            <button
              className={`${ns}__video-link open`}
              type={'button'}
              onClick={hideShowVideo}
            >
              Click to Play
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProjectHero = () => {
    if (project.video) {
      return (
        renderProjectHeroVideo()
      );
    }

    return (
      <div className={`${ns}__image`}>
        {renderProjectHeroImage()}
      </div>
    );
  };

  return (
    <div className={rootClassnames}>
      {renderProjectHero()}
    </div>
  );
};

ProjectHero.propTypes = {
  project: PropTypes.shape({})
};

ProjectHero.defaultProps = {
  project: null
};

export default ProjectHero;
