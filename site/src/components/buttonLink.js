import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Arrow } from './arrow';

const StyledButtonLink = styled(Link)`
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
      {children} <Arrow />
    </StyledButtonLink>
  );
}
