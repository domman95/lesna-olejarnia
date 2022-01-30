import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Proofs from '../components/proofs';
import About from '../templates/about';
import Products from '../templates/products';

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <main>
        <About />
        <Proofs />
        <Products />
      </main>
    </Layout>
  );
}
