import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Proofs from '../components/proofs';
import About from '../templates/about';

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <main>
        <About />
        <Proofs />
      </main>
    </Layout>
  );
}
