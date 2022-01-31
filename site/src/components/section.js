import React from 'react';
import styled, { css } from 'styled-components';
import { Heading } from './heading';

const StyledSection = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 2rem;

  ${({ line }) =>
    line &&
    css`
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100vw;
        border-bottom: 1px solid var(--green);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}

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

export default function Section({ name, line, heading, children }) {
  return (
    <StyledSection line={line} id={name}>
      <Heading>{heading}</Heading>
      {children}
    </StyledSection>
  );
}
