import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Section from '../components/section';
import About from '../templates/about';

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <main>
        <About />
      </main>
    </Layout>
  );
}
