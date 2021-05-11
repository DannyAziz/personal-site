import { Reset } from 'styled-reset';
import { GlobalStyle, lightTheme, darkTheme } from '@/utils/theme';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={lightTheme}>
    <Reset />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
