import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Contact from '../components/Contact';
import Container from '../components/Container';
import HomeIntro from '../components/HomeIntro';
import HomeFeaturedWork from '../components/HomeFeaturedWork';
import HomeOtherWork from '../components/HomeOtherWork';
import Reveal from '../components/Reveal';

import setMetaImage from '../utils/setMetaImage';

const Home = ({ data: { page } }) => {
  const {
    featuredImage,
    acfPageDetails: {
      seo
    },
    acfHomePage: {
      intro,
      featuredWork,
      otherWork,
    },
  } = page;

  // Set the meta image
  const metaImage = setMetaImage(featuredImage?.node, seo);

  return (
    <Container size={'small'}>
      <SEO
        page={'home'}
        image={metaImage}
        description={seo.metaDescription}
      />
      <HomeIntro
        intro={intro}
      />
      <Reveal>
        <HomeFeaturedWork
          featuredWork={featuredWork}
        />
      </Reveal>
      <Reveal>
        <HomeOtherWork
          otherWork={otherWork}
        />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </Container>
  );
};

export const query = graphql`
  query GET_HOME_PAGE($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      featuredImage {
        node {
          sourceUrl
          title
        }
      }
      acfPageDetails {
        seo {
          title
          metaDescription
          metaImage {
            sourceUrl
          }
        }
      }
      acfHomePage {
        intro {
          title
          bullets {
            bullet
          }
        }
        featuredWork {
          ... on WpProject {
            featuredImage {
              node {
                sourceUrl
                title
              }
            }
            title
            slug
            acfProjectDetails {
              logo {
                sourceUrl
                title
              }
            }
          }
        }
        otherWork {
          ... on WpProject {
            title
            slug
          }
        }
      }
    }
  }
`;

export default Home;
