import styled from 'styled-components';

export const GreenBackground = styled.section`
  padding: 2rem 0;
  background-color: var(--green);

  .title,
  .paragraph,
  .author {
    color: var(--white);
    text-align: center;
  }

  .paragraph {
    max-width: 35rem;
    margin: 0 auto;
  }

  .author {
    font-weight: 500;
    font-size: clamp(1.6rem, 1vw, 1.8rem);
  }
`;
