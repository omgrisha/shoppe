import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    font-weight: 400;
    src: url(./fonts/dm-sans-latin-400-normal.woff2);
  }

  @font-face {
    font-family: 'DM Sans';
    font-weight: 500;
    src: url(./fonts/dm-sans-latin-500-normal.woff2);
  }

  @font-face {
    font-family: 'DM Sans';
    font-weight: 700;
    src: url(./fonts/dm-sans-latin-700-normal.woff2);
  }

  @font-face {
    font-family: 'Allerta Stencil';
    font-weight: 400;
    src: url(./fonts/allerta-stencil-latin-400-normal.woff2);
  }
`;

export default GlobalStyle;