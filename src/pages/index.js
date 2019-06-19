import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import HomeIntro from '../components/HomeIntro';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div>
      <HomeIntro />
      <AniLink
        to={'/project/kushion'}
        cover
        bg={'#191919'}
        direction={'right'}
        duration={1}
      >
        Kushion
      </AniLink>
      <br />
      <AniLink
        fade
        to={'project/vizio-tvp'}
      >
        project 2
      </AniLink>
      <Contact />
    </div>
  );
};

export default Index;
