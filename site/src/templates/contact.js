import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { Box } from '../components/box';
import { Paragraph } from '../components/paragraph';
import { Title } from '../components/title';
import { Arrow } from '../components/arrow';
import { Line } from '../components/line';

import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import mail from '../assets/mail.svg';

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
  return (
    <Section heading="Poznajmy się" name="kontakt">
      <div className="wrapper">
        <Box className="contact line">
          <div className="content">
            <Title>Nasze profile w Social Mediach!</Title>
            <Paragraph>
              Staramy się być wszędzie gdzie tylko zechcesz nas spotkać, dlatego
              oferujemy kontakt poprzez popularne serwisy społecznościowe!
            </Paragraph>
            <Socials>
              <li>
                <a href="/" className="buttonLink">
                  <img src={instagram} alt="" /> instagram/lesnaolejarnia
                  <div className="arrow">
                    <Arrow />
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="buttonLink">
                  <img src={facebook} alt="" /> facebook/lesnaolejarnia
                  <div className="arrow">
                    <Arrow />
                  </div>
                </a>
              </li>
            </Socials>
          </div>
          <Line />
          <div className="content">
            <Title>Tradycyjna droga kontaktu?</Title>
            <Paragraph>
              Dla nas to żaden problem. Klikając w link poniżej możesz napisać
              do nas bezpośrednio ze swojej skrzynki pocztowej!
            </Paragraph>
            <a href="mailto:lesnaolejarnia@gmail.com" className="buttonLink">
              <img src={mail} alt="" /> lesnaolejarnia@gmail.com <Arrow />
            </a>
          </div>
        </Box>
      </div>
    </Section>
  );
}
