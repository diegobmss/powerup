import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white-1: #fff;
    --color-white-2: #f5f5f5;
    --color-black-1: #000;
  }

  body {
    background-color: var(--color-black-1);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
