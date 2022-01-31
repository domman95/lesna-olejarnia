import React from 'react';
import { Box } from '../components/box';
import ButtonLink from '../components/buttonLink';
import { Paragraph } from '../components/paragraph';
import Section from '../components/section';
import { Title } from '../components/title';

import rzepakowy from '../assets/rzepakowy.png';

export default function Products() {
  return (
    <Section line heading="Nasze produkty" name="produkty">
      <div className="wrapper">
        <Box className="box">
          <div className="roundedPhoto">
            <img src={rzepakowy} alt="" />
          </div>
          <div className="content">
            <Title>Naturalnie tłoczone oleje</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Paragraph>
            <ButtonLink link="/">zobacz więcej szczegółów</ButtonLink>
          </div>
        </Box>
        <Box className="box">
          <div className="roundedPhoto">
            <img src={rzepakowy} alt="" />
          </div>
          <div className="content">
            <Title>Naturalnie tłoczone oleje 2</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Paragraph>
            <ButtonLink link="/">zobacz więcej szczegółów</ButtonLink>
          </div>
        </Box>
      </div>
    </Section>
  );
}
