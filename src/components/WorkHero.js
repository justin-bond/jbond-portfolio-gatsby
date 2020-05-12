import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const nsBase = 'component';
const ns = `${nsBase}-work-hero`;

const WorkHero = ({ work }) => {
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
      <img src={work.screenshot} alt={work.slug} />
    );
  };

  const renderWorkHeroVideo = () => {
    if (workHeroState.videoVisible) {
      return (
        <div className={`${ns}__video`}>
          <div className={`${ns}__video-container video-aspect`}>
            <iframe
              src={`https://player.vimeo.com/video/${work.video}?autoplay=1&title=0&byline=0&portrait=0`}
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
    if (work.video) {
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

WorkHero.propTypes = {
  work: PropTypes.shape({
    slug: PropTypes.string,
    screenshot: PropTypes.string,
    video: PropTypes.string
  })
};

WorkHero.defaultProps = {
  work: null
};

export default WorkHero;
