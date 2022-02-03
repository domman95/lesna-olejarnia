import React from 'react';
import { Box } from './box';
import { Title } from './title';
import ButtonLink from './buttonLink';
import ProductDetails from './productDetails';
import { Paragraph } from './paragraph';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Product({ product }) {
  return (
    <Box className="box products" id={product.name}>
      <GatsbyImage
        className="gatsbyImgRounded"
        image={product.image.asset.gatsbyImageData}
        alt={product.name}
      />

      <div className="content">
        <Title>{product.name}</Title>
        <ProductDetails product={product} />
        <Paragraph className="yellow">
          Produkt należy przechowywać w lodówce!
        </Paragraph>
        <ButtonLink secondary link="/#kontakt">
          skontaktuj się, aby zamówić
        </ButtonLink>
      </div>
    </Box>
  );
}
