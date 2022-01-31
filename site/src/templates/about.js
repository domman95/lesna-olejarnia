import React from 'react';
import { Box } from '../components/box';
import Section from '../components/section';

import about from '../assets/about.png';
import picOfOil from '../assets/picOfOil.png';
import ButtonLink from '../components/buttonLink';
import { Title } from '../components/title';
import { Paragraph } from '../components/paragraph';

export default function About() {
  return (
    <Section heading="O nas" name="o-nas">
      <div className="wrapper">
        <Box className="box">
          <div className="photo">
            <img src={about} alt="" />
          </div>
          <div className="content">
            <Title>To co nas wyróżnia, to naturalne składniki</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Paragraph>
            <ButtonLink link="#produkty">sprawdź nasze produkty</ButtonLink>
          </div>
        </Box>
        <Box className="box">
          <div className="photo">
            <img src={picOfOil} alt="" />
          </div>
          <div className="content">
            <Title>Zdrowie wtłoczone do butelek</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Paragraph>
            <ButtonLink link="#produkty">sprawdź nasze produkty</ButtonLink>
          </div>
        </Box>
      </div>
    </Section>
  );
}
