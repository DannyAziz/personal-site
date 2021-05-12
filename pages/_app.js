import { useState } from "react";

import { Reset } from "styled-reset";
import { GlobalStyle, lightTheme, darkTheme } from "@/utils/theme";
import { ThemeProvider } from "styled-components";

import Header from "@/components/header/index.js";

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Reset />
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
