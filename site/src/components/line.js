import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  width: calc(100% - 4rem);
  border-bottom: 1px solid var(--green);
  margin-bottom: 2rem;

  @media (min-width: 700px) {
    width: 1px;
    height: 120%;
    border-left: 2px solid var(--green);
    margin: 0;
  }
`;

export const Line = () => <StyledLine />;
