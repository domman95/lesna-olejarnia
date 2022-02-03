import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { Box } from '../components/box';
import { Paragraph } from '../components/paragraph';
import { Title } from '../components/title';
import { Arrow } from '../components/arrow';
import { Line } from '../components/line';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Socials = styled.ul`
  display: grid;
  gap: 1rem;

  li a {
    position: relative;
    display: inline-flex;

    .arrow {
      position: relative;
      height: 2rem;
      width: 2rem;
      overflow: hidden;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(100%, -50%) rotate(180deg);
        transition: transform 0.1s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }

    &:hover .arrow svg,
    &:focus .arrow svg {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      contactInfo: allSanityContact {
        nodes {
          title
          id
          description
          iconsAndLinks {
            name
            url
            id
            icon {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const contactInfo = data.contactInfo.nodes;

  return (
    <Section heading="Poznajmy się" name="kontakt">
      <div className="wrapper">
        <Box className="contact line">
          {contactInfo.map(
            ({ id, title, description, iconsAndLinks }, index) => (
              <React.Fragment key={id}>
                <div className="content">
                  <Title>{title}</Title>
                  <Paragraph>{description}</Paragraph>
                  <Socials>
                    {iconsAndLinks.map(({ id: linkId, name, url, icon }) => (
                      <li key={linkId}>
                        <a
                          href={url.includes('http') ? url : `mailto:${url}`}
                          className="buttonLink">
                          <GatsbyImage
                            image={icon.asset.gatsbyImageData}
                            alt={name}
                          />{' '}
                          {name}
                          <div className="arrow">
                            <Arrow />
                          </div>
                        </a>
                      </li>
                    ))}
                  </Socials>
                </div>
                {index === 0 && <Line />}
              </React.Fragment>
            )
          )}
        </Box>
      </div>
    </Section>
  );
}
