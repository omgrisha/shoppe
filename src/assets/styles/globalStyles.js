import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Text styles */

  .heading-1, .heading-4 {
    font-weight: 500;
    line-height: 1.3;
  }

  .heading-1 {
    font-size: 2.0625rem;
  }

  .heading-2 {
    font-size: 1.625rem;
    line-height: 1.35;
  }

  .heading-3 {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  .heading-4 {
    font-size: 1.25rem;
  }

  .heading-5 {
    font-size: 1rem;
    line-height: 1.6875;
  }

  .heading-5 + .heading-5,
  .body-small + .body-small {
    margin-top: 0.625rem;
  }

  .body-large {
    font-weight: 700;
  }

  .body-medium {
    font-size: 0.875;
    line-height: 1.6;
  }

  .body-small {
    font-size: 0.75rem;
    line-height: 1.7;
  }

  /* */

  body {
    font-family: 'DM Sans', sans-serif;
  }

  .container {
    max-width: 78rem;
    margin: 0 auto;
    padding: 0 20px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default GlobalStyle;