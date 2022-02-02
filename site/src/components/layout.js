import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from './nav';
import Seo from './seo';
import Footer from '../templates/footer';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
