import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Arrow } from './arrow';

const StyledButtonLink = styled(Link)`
  display: inline-flex;

  .arrow {
    position: relative;
    overflow: hidden;

    svg {
      animation: out 0.3s forwards;
      transform: translateX(0);
    }

    @keyframes in {
      0% {
        transform: translateX(0);
      }

      30% {
        transform: translateX(100%);
      }

      60% {
        transform: translateX(100%) rotate(180deg);
      }

      100% {
        transform: translateX(0) rotate(180deg);
      }
    }

    @keyframes out {
      0% {
        transform: translateX(0) rotate(180deg);
      }

      30% {
        transform: translateX(100%) rotate(180deg);
      }

      60% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(0);
      }
    }
  }

  &:hover .arrow svg,
  &:focus .arrow svg {
    animation: in 0.3s forwards;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      display: inline-block;
      padding: 0.5rem 1.5rem;
      color: var(--white);
      background-color: var(--green);
      border-radius: var(--radius);
      box-shadow: var(--boxShadow);

      svg path {
        stroke: var(--white);
      }
    `}
`;

export default function ButtonLink({
  secondary = false,
  children,
  link = '/',
}) {
  return (
    <StyledButtonLink
      className="buttonLink"
      secondary={secondary ? 1 : 0}
      to={link}>
      {children}
      <div className="arrow">
        <Arrow />
      </div>
    </StyledButtonLink>
  );
}
