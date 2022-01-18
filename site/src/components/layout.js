import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from './nav2';
import Seo from './seo';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}
