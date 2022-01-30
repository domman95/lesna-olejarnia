import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './paragraph';
import { Title } from './title';

const StyledProofs = styled.section`
  padding: 2rem 0;
  background-color: var(--green);

  .title,
  .paragraph,
  .author {
    color: var(--white);
    text-align: center;
  }

  .paragraph {
    max-width: 35rem;
    margin: 0 auto;
  }

  .author {
    font-weight: 500;
    font-size: clamp(1.6rem, 1vw, 1.8rem);
  }
`;

export default function Proofs() {
  return (
    <StyledProofs>
      <Title className="title">Rekomendacje naszych klientów</Title>
      <Paragraph className="paragraph">
        “Bardzo polecam zamawiam juz kolejna paczuszke świetna jakość produktów
        przemile obsługa Pani Właścicielki”
      </Paragraph>
      <p className="author">@malgorzata_puch</p>
    </StyledProofs>
  );
}
