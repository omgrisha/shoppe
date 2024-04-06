import { Reset } from 'styled-reset';
import { GlobalStyle } from './assets/styles/globalStyles';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Home />
    </>
  );
};