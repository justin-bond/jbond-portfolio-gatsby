import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import AnchorLink from '../components/AnchorLink';
import Contact from '../components/Contact';
import Container from '../components/Container';
import WorkHero from '../components/WorkHero';
import WorkTitle from '../components/WorkTitle';
import WorkExternalLink from '../components/WorkExternalLink';
import WorkSkills from '../components/WorkSkills';
import WorkAgency from '../components/WorkAgency';
import Reveal from '../components/Reveal';

const nsBase = 'template';
const ns = `${nsBase}-work`;

const workTemplate = ({ data }) => {
  const work = data.workJson;

  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
    [`${ns}--${work.slug}`]: work.slug,
  });

  return (
    <div className={rootClassnames}>
      <Helmet>
        <title>{work.title}</title>
      </Helmet>
      <Container size={'small'}>
        <div className={`${ns}__container`}>
          <Reveal>
            <WorkHero work={work} />
          </Reveal>
          <Reveal>
            <WorkTitle title={work.title} />
          </Reveal>
          {work.link &&
            (
              <Reveal>
                <WorkExternalLink externalLink={work.link} />
              </Reveal>
            )
          }
          {work.skills &&
            (
              <Reveal>
                <WorkSkills skills={work.skills} />
              </Reveal>
            )
          }
          {work.agency &&
            (
              <Reveal>
                <WorkAgency agency={work.agency} />
              </Reveal>
            )
          }
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

workTemplate.propTypes = {
  data: PropTypes.shape({
    workJson: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      agency: PropTypes.string,
      screentshot: PropTypes.string,
      video: PropTypes.string,
      link: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.shape({}))
    }),
  }),
};

workTemplate.defaultProps = {
  data: null
};

export const query = graphql`
  query($id: String!) {
    workJson(id: { eq: $id }) {
      title
      slug
      agency
      screenshot
      video
      link
      skills {
        skill
      }
    }
  }
`;

export default workTemplate;
