import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from './nav';
import Seo from './seo';
import Footer from '../templates/footer';

export default function Layout({ children }) {
  const isBrowser = () => typeof window !== 'undefined';
  isBrowser() && window.location.replace(res.data);

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
