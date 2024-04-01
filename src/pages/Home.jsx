import styled from 'styled-components';

import Header from '../components/Header/Header';

const StyledHome = styled.div`
  padding: 64px 0 90px 0;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

export default Home;