import React from 'react';
import { GreenBackground } from './greenBackground';
import { Paragraph } from './paragraph';
import { Title } from './title';

export default function Proofs() {
  return (
    <GreenBackground>
      <Title className="title">Rekomendacje naszych klientów</Title>
      <Paragraph className="paragraph">
        “Bardzo polecam zamawiam juz kolejna paczuszke świetna jakość produktów
        przemile obsługa Pani Właścicielki”
      </Paragraph>
      <p className="author">@malgorzata_puch</p>
    </GreenBackground>
  );
}
