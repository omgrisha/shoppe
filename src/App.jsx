import { Reset } from 'styled-reset';
import { GlobalStyle } from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
};