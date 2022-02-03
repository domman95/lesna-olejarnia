import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Arrow } from '../components/arrow';
import Layout from '../components/layout';
import Product from '../components/product';
import Section from '../components/section';
import ShortProduct from '../components/shortProduct';

const StyledMain = styled.main`
  padding-top: 20rem;

  .backToHomePage {
    width: calc(100% - 4rem);
    max-width: 120rem;
    margin: 0 auto;
    border-bottom: 1px solid var(--black);

    a {
      margin-bottom: 1rem;
    }

    svg {
      transform: rotate(180deg);
    }
  }

  .shortListOfAllProducts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
  }
`;

export default function ProductsTemplate({ pageContext }) {
  const { products, title } = pageContext;

  return (
    <Layout>
      <StyledMain>
        <div className="backToHomePage">
          <Link className="buttonLink" to="/">
            <Arrow />
            powrót na stronę główną
          </Link>
        </div>
        <Section heading={title}>
          <div className="wrapper">
            <ul className="shortListOfAllProducts">
              {products.map(({ id, name, image }) => (
                <ShortProduct name={name} image={image} key={id} />
              ))}
            </ul>
            {products.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </div>
        </Section>
      </StyledMain>
    </Layout>
  );
}
