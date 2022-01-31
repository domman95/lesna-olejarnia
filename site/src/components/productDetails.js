import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './paragraph';

const StyledProductDetails = styled.ul`
  padding: 2rem 0 0;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0.2rem 0;
`;

const ProductProp = ({ productKey, productValue }) => {
  return (
    <StyledParagraph>
      <span className="productKey">{productKey} </span>
      <span className="productValue">{productValue}</span>
    </StyledParagraph>
  );
};

export default function ProductDetails({
  product: { nutritional, price, composition, capacity },
}) {
  return (
    <StyledProductDetails>
      <ProductProp productKey="Wartosci odżywcze:" productValue={nutritional} />
      <ProductProp productKey="Zastosowanie:" productValue="" />
      <ProductProp productKey="Cena:" productValue={`${price},-`} />
      <ProductProp productKey="Pojemność:" productValue={capacity} />
      <ProductProp productKey="Skład:" productValue={composition} />
      <ProductProp
        productKey="Data przydatności do spożycia:"
        productValue="3 miesiące od daty tłoczenia"
      />
    </StyledProductDetails>
  );
}
