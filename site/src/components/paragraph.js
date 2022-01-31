import styled from 'styled-components';

export const Paragraph = styled.p`
  color: var(--black);
  font-weight: 500;
  font-size: clamp(1.6rem, 1vw, 1.8rem);
  padding: 2rem 0;

  .productKey {
    color: var(--green);
  }

  .productValue,
  &.yellow,
  .productKey {
    font-weight: 400;
  }

  &.yellow {
    padding: 2rem 0;
    color: var(--yellow);
  }
`;
