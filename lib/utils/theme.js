import { createGlobalStyle } from 'styled-components';

const BREAKPOINTS = Object.freeze({
  mobileS: '(min-width: 320px)',
  mobileM: '(min-width: 375px)',
  mobileL: '(min-width: 425px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  laptopL: '(min-width: 1440px)',
  desktop: '(min-width: 2560px)'
});

const theme = Object.freeze({
  breakpoints: BREAKPOINTS,
  zIndexes: {
    base: 1
  }
});

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default theme;
