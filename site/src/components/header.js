import React from 'react';
import styled from 'styled-components';
import ButtonLink from './buttonLink';

import heroImg1 from '../assets/heroImg1.png';
import heroImg2 from '../assets/heroImg2.png';
import arrowDown from '../assets/arrow-down.svg';

const StyledHeader = styled.header`
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
  padding: 14rem 2rem 4rem;
  height: 100vh;
  max-height: 70rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .heroTextWrapper {
    max-width: 50rem;

    .heroText {
      margin: 0;
      font-size: clamp(3.8rem, 10vw, 5.4rem);
      font-family: var(--pacifico);
      color: var(--green);
      text-shadow: var(--boxShadow);
    }

    .heroParagraph {
      font-size: clamp(1.6rem, 2vw, 2rem);
      padding: 2rem 2rem 2rem 0;
      text-shadow: var(--boxShadow);
    }
  }

  .heroImageWrapper {
    position: relative;
    flex: 1;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 2.5rem;
      width: 100%;
    }

    &::before {
      top: 0;
      left: 1rem;
      background-image: url(${heroImg1});
      max-width: 60%;
      height: 90%;
      transform: rotate(-6deg);
      box-shadow: var(--leftBoxShadow);
    }

    &::after {
      background-image: url(${heroImg2});
      max-width: 50%;
      bottom: 0;
      right: 1rem;
      height: 80%;
      transform: rotate(6deg);
      box-shadow: var(--rightBoxShadow);
    }
  }

  .scrollDownLine {
    position: relative;
    position: absolute;
    width: 100vw;
    border: 1px solid var(--green);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: url(${arrowDown});
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: var(--boxShadow);
    }
  }

  @media (min-width: 480px) {
    max-height: 80rem;
  }

  @media (min-width: 620px) {
    max-height: 90rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    max-height: 62rem;
    gap: 0;

    .heroTextWrapper {
      grid-column: 1 / 5;
      grid-row: 1 / 3;

      .heroParagraph {
        padding: 2rem 10rem 2rem 0;
      }
    }

    .heroImageWrapper {
      grid-column: 4 / -1;
      grid-row: 3 / -1;
    }
  }

  @media (min-width: 870px) {
    .heroImageWrapper {
      grid-column: 4 / -1;
      grid-row: 2 / -1;
    }
  }

  @media (min-width: 1000px) {
    grid-template-rows: repeat(8, 1fr);

    .heroTextWrapper {
      grid-column: 1 / 5;
      grid-row: 2 / 4;

      .heroParagraph {
        padding: 2rem 0;
      }
    }

    .heroImageWrapper {
      grid-column: 4 / -1;
      grid-row: 1 / -1;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="heroTextWrapper">
        <h1 className="heroText">Naturalne oleje tłoczone na zimno</h1>
        <p className="heroParagraph">
          naszą pasją jest zdrowie, a oleje, które produkujemy są zdrowiem samym
          w sobie
        </p>
        <ButtonLink link="#produkty">
          zapoznaj się z naszymi produktami
        </ButtonLink>
      </div>
      <div className="heroImageWrapper" />
      <div className="scrollDownLine" />
    </StyledHeader>
  );
}
