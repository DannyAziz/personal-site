import { useState, useEffect } from "react";

import { Reset } from "styled-reset";
import { GlobalStyle, lightTheme, darkTheme } from "@/utils/theme";
import { ThemeProvider } from "styled-components";

import Header from "@/components/header/index.js";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  let deviceDarkMode;

  if (process.browser) {
    deviceDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [theme, setTheme] = useState(
    deviceDarkMode === undefined ? null : deviceDarkMode ? "dark" : "light"
  );

  const watchForThemeChanges = (e) => {
    setTheme(e.matches ? "dark" : "light");
  };

  useEffect(() => {
    if (process.browser) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", watchForThemeChanges);

      return () => {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", watchForThemeChanges);
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Reset />
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme} />
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
