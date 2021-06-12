import { createGlobalStyle } from "styled-components";

const BREAKPOINTS = Object.freeze({
  mobileS: "(min-width: 320px)",
  mobileM: "(min-width: 375px)",
  mobileL: "(min-width: 425px)",
  tablet: "(min-width: 768px)",
  laptop: "(min-width: 1024px)",
  laptopL: "(min-width: 1440px)",
  desktop: "(min-width: 2560px)"
});

export const baseTheme = Object.freeze({
  breakpoints: BREAKPOINTS,
  zIndexes: {
    base: 1
  }
});

export const lightTheme = Object.freeze({
  ...baseTheme,
  backgroundColor: "#FFFFF6",
  textColor: "#0D1523"
});

export const darkTheme = Object.freeze({
  ...baseTheme,
  backgroundColor: "#0D1523",
  textColor: "#FFFFF6"
});

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.5s ease-in;
  }

  h1 {
    font-weight: 500;
    font-size: 100px;
    line-height: 121px;
  }

  h3 {
    font-weight: normal;
    font-size: 33px;
    line-height: 40px;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
  }

  #__next {
    padding: 0;

    @media ${(p) => p.theme.breakpoints.tablet} {
      padding: 0 28px;
    }
  }
`;
