import styled from 'styled-components';

export const Box = styled.article`
  display: grid;
  justify-items: center;
  align-items: center;
  box-shadow: var(--boxShadow);
  background-color: var(--white);
  border-radius: var(--radius);

  &.contact,
  &.products {
    padding: 4rem 0;
  }

  &.products {
    gap: 2rem;
  }

  .gatsbyImg {
    justify-self: center;
    transform: translateY(-6rem) rotate(-6deg);
    max-width: 75%;
    max-height: 44rem;
    border-radius: var(--radius);
    box-shadow: var(--boxShadow);
  }

  .gatsbyImgRounded {
    justify-self: center;
    max-width: 75%;
    max-height: 44rem;
    aspect-ratio: 1 / 1;
    border-radius: 50% 40% 43% 52% / 46% 36% 51% 44%;

    img {
      border-radius: 50% 40% 43% 52% / 46% 36% 51% 44%;
    }
  }

  .content {
    padding: 0 2rem 2rem 2rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    &.line {
      grid-template-columns: 1fr 1px 1fr;
    }

    &.contact {
      padding: 6rem 0;
    }

    .content {
      align-self: center;
      max-width: 40rem;
    }
  }
`;
