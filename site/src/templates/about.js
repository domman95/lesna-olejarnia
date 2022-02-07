import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Section from '../components/section';
import ButtonLink from '../components/buttonLink';
import { Title } from '../components/title';
import { Paragraph } from '../components/paragraph';
import { Box } from '../components/box';

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      aboutInfo: allSanityAbout {
        nodes {
          title
          id
          description
          image {
            asset {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const aboutInfo = data.aboutInfo.nodes;

  return (
    <Section heading="O nas" name="o-nas">
      <div className="wrapper">
        {aboutInfo.map(({ id, title, description, image }) => (
          <Box className="box" key={id}>
            <GatsbyImage
              className="gatsbyImg"
              image={image.asset.gatsbyImageData}
              alt={title}
            />
            <div className="content">
              <Title>{title}</Title>
              <Paragraph>{description}</Paragraph>
              <ButtonLink link="#produkty">sprawdź nasze produkty</ButtonLink>
            </div>
          </Box>
        ))}
      </div>
    </Section>
  );
}
