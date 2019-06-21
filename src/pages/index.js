import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Contact from '../components/Contact';
import Container from '../components/Container';
import HomeIntro from '../components/HomeIntro';
import HomeRecentWork from '../components/HomeRecentWork';
import HomeOtherWork from '../components/HomeOtherWork';
import Reveal from '../components/Reveal';

const Index = ({ data, location }) => {
  const {
    recentProjects,
    otherProjects
  } = data;

  return (
    <Container size={'small'}>
      <HomeIntro />
      <Reveal>
        <HomeRecentWork recentProjects={recentProjects.edges} location={location} />
      </Reveal>
      <Reveal>
        <HomeOtherWork otherProjects={otherProjects.edges} />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </Container>
  );
};

Index.propTypes = {
  location: PropTypes.shape({}),
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
  location: null,
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
