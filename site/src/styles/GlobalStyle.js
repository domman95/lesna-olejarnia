import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --pacifico: 'Pacifico', cursive;
    --quicksand: 'Quicksand', sans-serif;
    --white: #F9FCFF;
    --green: #268157;
    --yellow: #D7B740;
    --black: #313131;
    --boxShadow: -1rem -1rem 2rem #F0F6FC, 1rem 1rem 2rem #CAD7E5;
    --rightBoxShadow: 1rem 1rem 2rem #CAD7E5;
    --leftBoxShadow: -1rem -1rem 2rem #F0F6FC;
    --radius: 2.5rem;
  }

  html {
    font-size: 10px;
    font-family: var(--quicksand);
    background-color: var(--white);
  }

  body {
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6,p,a {
    color: var(--black);
  }

  img {
    max-width: 100%;
  }

  li {
    list-style: none;
  }

  .buttonLink {
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: 200;
    text-shadow: var(--boxShadow);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

`;

export default GlobalStyle;
