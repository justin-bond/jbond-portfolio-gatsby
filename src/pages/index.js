import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Contact from '../components/Contact';
import Container from '../components/Container';
import HomeIntro from '../components/HomeIntro';
import HomeFeaturedWork from '../components/HomeFeaturedWork';
import HomeOtherWork from '../components/HomeOtherWork';
import Reveal from '../components/Reveal';

const Index = ({ data, location }) => {
  const {
    recentWork,
    otherWork
  } = data;

  return (
    <Container size={'small'}>
      <HomeIntro />
      <Reveal>
        <HomeFeaturedWork featuredWork={recentWork.edges} location={location} />
      </Reveal>
      <Reveal>
        <HomeOtherWork otherWork={otherWork.edges} />
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
    recentWork: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string,
          slug: PropTypes.string,
          logo: PropTypes.string,
          screenshot: PropTypes.string
        })
      }))
    }),
    otherWork: PropTypes.shape({
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
    recentWork: {
      edges: {
        node: {
          title: '',
          slug: '',
          logo: '',
          screenshot: ''
        }
      }
    },
    otherWork: {
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
    recentWork: allWorkJson(filter: {workOptions: {eq: "recentWork"}}) {
      edges {
        node {
          title
          slug
          logo
          screenshot
        }
      }
    }
    otherWork: allWorkJson(filter: {workOptions: {eq: "otherWork"}}) {
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
