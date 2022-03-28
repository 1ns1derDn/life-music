import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
 

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }  

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;
