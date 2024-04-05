import { StyledHome } from './Home.styled';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Footer />
    </StyledHome>
  );
};