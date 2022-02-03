import React from 'react';
import styled from 'styled-components';
import ButtonLink from './buttonLink';

import arrowDown from '../assets/arrow-down.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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

    .image {
      position: absolute;
      border-radius: 2.5rem;
      width: 100%;

      &.left {
        top: 0;
        left: 1rem;
        max-width: 60%;
        height: 90%;
        transform: rotate(-6deg);
        box-shadow: var(--leftBoxShadow);
      }

      &.right {
        bottom: 0;
        right: 1rem;
        height: 80%;
        max-width: 60%;
        transform: rotate(6deg);
        box-shadow: var(--rightBoxShadow);
      }
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
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      headerInfo: allSanityHeader {
        nodes {
          title
          subTitle
          leftImage {
            asset {
              id
              gatsbyImageData
            }
          }
          rightImage {
            asset {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const headerInfo = data.headerInfo.nodes[0];

  return (
    <StyledHeader>
      <div className="heroTextWrapper">
        <h1 className="heroText">{headerInfo.title}</h1>
        <p className="heroParagraph">{headerInfo.subTitle}</p>
        <ButtonLink link="#produkty">
          zapoznaj się z naszymi produktami
        </ButtonLink>
      </div>
      <div className="heroImageWrapper">
        <GatsbyImage
          image={headerInfo.leftImage.asset.gatsbyImageData}
          alt="lesna olejarnia"
          className="image left"
        />
        <GatsbyImage
          image={headerInfo.rightImage.asset.gatsbyImageData}
          alt="lesna olejarnia"
          className="image right"
        />
      </div>
      <div className="scrollDownLine" />
    </StyledHeader>
  );
}
