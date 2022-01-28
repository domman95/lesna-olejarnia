import React from 'react';
import { Box } from '../components/box';
import Section from '../components/section';

import about from '../assets/about.png';
import picOfOil from '../assets/picOfOil.png';
import ButtonLink from '../components/buttonLink';

export default function About() {
  return (
    <Section heading="O nas">
      <div className="wrapper">
        <Box className="box">
          <div className="photo">
            <img src={about} alt="" />
          </div>
          <div className="content">
            <div className="title">
              To co nas wyróżnia, to naturalne składniki
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </p>
            <ButtonLink link="#produkty">sprawdź nasze produkty</ButtonLink>
          </div>
        </Box>
        <Box className="box">
          <div className="photo">
            <img src={picOfOil} alt="" />
          </div>
          <div className="content">
            <div className="title">Zdrowie wtłoczone do butelek</div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </p>
            <ButtonLink link="#produkty">sprawdź nasze produkty</ButtonLink>
          </div>
        </Box>
      </div>
    </Section>
  );
}
