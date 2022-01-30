import React from 'react';
import styled from 'styled-components';
import { Heading } from './heading';

const StyledSection = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 2rem;

  .wrapper {
    display: grid;
    gap: 14rem;
    margin-top: 10rem;

    .box:nth-child(even) > .photo {
      transform: translateY(-6rem) rotate(6deg);
    }

    @media (min-width: 700px) {
      .box:nth-child(even) {
        direction: rtl;

        .content {
          direction: ltr;
        }
      }
    }
  }
`;

export default function Section({ heading, children }) {
  return (
    <StyledSection>
      <Heading>{heading}</Heading>
      {children}
    </StyledSection>
  );
}
