import styled from 'styled-components';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const StyledHome = styled.div`
  padding: 64px 0 90px 0;
`;

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Footer />
    </StyledHome>
  );
};