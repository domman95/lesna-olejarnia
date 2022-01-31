import React from 'react';
import { Box } from './box';
import { Title } from './title';
import ButtonLink from './buttonLink';
import rzepakowy from '../assets/rzepakowy.png';
import ProductDetails from './productDetails';
import { Paragraph } from './paragraph';

export default function Product({ product }) {
  return (
    <Box className="box products" id={product.name}>
      <div className="roundedPhoto">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="content">
        <Title>{product.name}</Title>
        <ProductDetails product={product} />
        <Paragraph className="yellow">
          Produkt należy przechowywać w lodówce!
        </Paragraph>
        <ButtonLink secondary="true" link="/#kontakt">
          skontaktuj się, aby zamówić
        </ButtonLink>
      </div>
    </Box>
  );
}
