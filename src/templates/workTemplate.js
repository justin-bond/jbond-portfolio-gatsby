import React from 'react';
import classNames from 'classnames';
import { graphql } from 'gatsby';

import setMetaImage from '../utils/setMetaImage';

import SEO from '../components/SEO';
import AnchorLink from '../components/AnchorLink';
import Contact from '../components/Contact';
import Container from '../components/Container';
import WorkHero from '../components/WorkHero';
import Reveal from '../components/Reveal';

const nsBase = 'template';
const ns = `${nsBase}-work`;

const workTemplate = ({ data: { project } }) => {
  const {
    title,
    slug,
    featuredImage,
    acfProjectDetails: {
      seo,
      videoLink,
      bullets,
      websiteLink,
      disclaimer,
    },
  } = project;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
    [`${ns}--${slug}`]: slug,
  });

  // Set the meta image
  const metaImage = setMetaImage(featuredImage?.node, seo);

  return (
    <div className={rootClassnames}>
      <SEO
        title={`${seo.title || title} | Work`}
        page={title}
        image={metaImage}
        description={seo.metaDescription}
      />
      <Container size={'small'}>
        <div className={`${ns}__container`}>
          <Reveal>
            <WorkHero
              slug={slug}
              image={featuredImage?.node.sourceUrl}
              video={videoLink}
            />
          </Reveal>
          <Reveal>
            <div className={`${ns}__title`}>
              <h1>{title}</h1>
            </div>
          </Reveal>
          {websiteLink && (
            <Reveal>
              <div className={`${ns}__website-link`}>
                <AnchorLink to={websiteLink} target={'_blank'}>Website Link</AnchorLink>
              </div>
            </Reveal>
          )}
          {bullets && (
            <Reveal>
              <div className={`${ns}__bullets`}>
                {bullets.map(({ bullet }) => {
                  return (
                    <div className={`${ns}__bullet`} key={bullet}>
                      {bullet}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}
          {disclaimer && (
            <Reveal>
              <div className={`${ns}__disclaimer`}>
                {disclaimer}
              </div>
            </Reveal>
          )}
          <Reveal>
            <div className={`${ns}__home`}>
              <AnchorLink to={'/'} direction={'left'}>Back to Home</AnchorLink>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <Contact />
        </Reveal>
      </Container>
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    project: wpProject(id: { eq: $id }) {
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      acfProjectDetails {
        seo {
          title
          metaDescription
          metaImage {
            sourceUrl
          }
        }
        websiteLink
        videoLink
        disclaimer
        bullets {
          bullet
        }
      }
    }
  }
`;

export default workTemplate;
