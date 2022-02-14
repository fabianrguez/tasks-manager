const { createGlobalStyle } = require('styled-components');

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  *::before, *::after {
    box-sizing: inherit
  }

  html, body, #app {
    display: flex;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.bodyBackground};
  }

  main {
    padding: 1rem;
    width: 100%;
  }
`;
