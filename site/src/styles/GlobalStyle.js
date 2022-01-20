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
    --boxShadow: -10px -10px 20px #F0F6FC, 10px 10px 20px #CAD7E5;
    --rightBoxShadow: 10px 10px 20px #CAD7E5;
    --leftBoxShadow: -10px -10px 20px #F0F6FC;
  }

  html {
    font-size: 10px;
    font-family: var(--quicksand);
    background-color: var(--white);
  }

  body {
    height: 200vh;
    overflow: hidden;
  }

  h1,h2,h3,h4,h5,h6,p,a {
    color: var(--black);
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
