import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 2rem;

  .heading {
    font-weight: 700;
    font-size: clamp(2.8rem, 2vw, 4rem);
    text-align: center;
  }

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
      <h2 className="heading">{heading}</h2>
      {children}
    </StyledSection>
  );
}
