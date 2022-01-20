import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledButtonLink = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: 200;
  text-shadow: var(--boxShadow);
`;

export default function ButtonLink({ children, link = '/' }) {
  return (
    <StyledButtonLink to={link}>
      {children}{' '}
      <svg
        width="10"
        height="8"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.50573 0.5L10 5M10 5L5.50573 9.5M10 5L1 5"
          stroke="#313131"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledButtonLink>
  );
}
