import React, { useState } from 'react';
import classNames from 'classnames';
import parseVideo from '../utils/parseVideo';

const nsBase = 'component';
const ns = `${nsBase}-work-hero`;

const WorkHero = ({ slug, image, video }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const [workHeroState, setWorkHeroState] = useState({
    videoVisible: false
  });

  const hideShowVideo = () => {
    setWorkHeroState((prevState) => {
      return { ...prevState, videoVisible: !workHeroState.videoVisible };
    });
  };

  const renderWorkHeroImage = () => {
    return (
      <img src={image} alt={slug} />
    );
  };

  const renderWorkHeroVideo = () => {
    if (workHeroState.videoVisible) {
      return (
        <div className={`${ns}__video`}>
          <div className={`${ns}__video-container video-aspect`}>
            {parseVideo(video)}
            <button className={`${ns}__video-link close`} type={'button'} onClick={hideShowVideo}>
              Exit Video
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={`${ns}__video image`}>
        {renderWorkHeroImage()}
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

  const renderWorkHero = () => {
    if (video) {
      return (
        renderWorkHeroVideo()
      );
    }

    return (
      <div className={`${ns}__image`}>
        {renderWorkHeroImage()}
      </div>
    );
  };

  return (
    <div className={rootClassnames}>
      {renderWorkHero()}
    </div>
  );
};

export default WorkHero;
