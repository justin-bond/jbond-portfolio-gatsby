import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';

import Contact from '../components/Contact';
import HomeIntro from '../components/HomeIntro';
import HomeRecentWork from '../components/HomeRecentWork';

const Index = ({ data }) => {
  const {
    recentProjects
  } = data;

  return (
    <div>
      <HomeIntro />
      <HomeRecentWork recentProjects={recentProjects.edges} />
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

Index.propTypes = {
  data: PropTypes.shape({
    recentProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string,
          slug: PropTypes.string,
          logo: PropTypes.string,
          screenshot: PropTypes.string
        })
      }))
    }),
    otherProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string,
          slug: PropTypes.string
        })
      }))
    })
  })
};

Index.defaultProps = {
  data: {
    recentProjects: {
      edges: {
        node: {
          title: '',
          slug: '',
          logo: '',
          screenshot: ''
        }
      }
    },
    otherProjects: {
      edges: {
        node: {
          title: '',
          slug: ''
        }
      }
    }
  }
};

export const query = graphql`
  query {
    recentProjects: allProjectsJson(filter: {projectOptions: {eq: "recentWork"}}) {
      edges {
        node {
          title
          slug
          logo
          screenshot
        }
      }
    }
    otherProjects: allProjectsJson(filter: {projectOptions: {eq: "otherWork"}}) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default Index;
