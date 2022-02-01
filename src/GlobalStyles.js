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
    height: 100vh;
    width: 100vh;
    padding: 1rem 4rem;
  }
`;