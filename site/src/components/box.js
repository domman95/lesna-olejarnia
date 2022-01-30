import styled from 'styled-components';

export const Box = styled.article`
  display: grid;
  justify-items: center;
  box-shadow: var(--boxShadow);
  background-color: var(--white);
  border-radius: var(--radius);

  .photo {
    justify-self: center;
    transform: translateY(-6rem) rotate(-6deg);
    max-width: 75%;

    img {
      max-height: 44rem;
      border-radius: var(--radius);
      box-shadow: var(--boxShadow);
    }
  }

  .content {
    padding: 0 2rem 2rem 2rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    .content {
      align-self: center;
      max-width: 40rem;
    }
  }
`;
