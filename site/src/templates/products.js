import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Box } from '../components/box';
import ButtonLink from '../components/buttonLink';
import { Paragraph } from '../components/paragraph';
import Section from '../components/section';
import { Title } from '../components/title';

export default function Products() {
  const data = useStaticQuery(graphql`
    query {
      basicCategoryInfo: allSanityCategory {
        nodes {
          id
          title
          slug {
            current
          }
          image {
            asset {
              id
              gatsbyImageData
            }
          }
          description
        }
      }
    }
  `);

  return (
    <Section line heading="Nasze produkty" name="produkty">
      <div className="wrapper">
        {data.basicCategoryInfo.nodes.map(
          ({ id, title, slug, image, description }) => (
            <Box className="box products" key={id}>
              <div className="roundedPhoto">
                <GatsbyImage image={image.asset.gatsbyImageData} alt={title} />
              </div>
              <div className="content">
                <Title>{title}</Title>
                <Paragraph>{description}</Paragraph>
                <ButtonLink link={`/${slug.current}`}>
                  zobacz więcej szczegółów
                </ButtonLink>
              </div>
            </Box>
          )
        )}
      </div>
    </Section>
  );
}
