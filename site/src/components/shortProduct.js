import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './paragraph';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledShortProduct = styled.li`
  box-shadow: var(--boxShadow);
  border-radius: var(--radius);
  padding: 0.5rem 1.5rem;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;

  a {
    display: inline-flex;
    align-items: center;
    height: 100%;
    gap: 1rem;
  }

  &:hover {
    transform: scale(1.01);
  }

  .shortImage {
    width: 4rem;
    height: 4rem;
    border-radius: 50% 40% 43% 52% / 46% 36% 51% 44%;
  }
`;

export default function ShortProduct({ name, image }) {
  return (
    <StyledShortProduct role="button">
      <Link to={`#${name}`}>
        <GatsbyImage
          className="shortImage"
          image={image.asset.gatsbyImageData}
          alt={name}
        />
        <Paragraph>{name}</Paragraph>
      </Link>
    </StyledShortProduct>
  );
}
