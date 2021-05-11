import { Reset } from 'styled-reset';
import theme, { GlobalStyle } from '@/utils/theme';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
