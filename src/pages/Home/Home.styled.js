import styled from 'styled-components';

import { BLACK_COLOR_LIGHT, ACCENT_COLOR_LIGHT } from '../../assets/styles/vars';

export const StyledHome = styled.div`
  padding: 64px 0 90px 0;
`;

export const Latest = styled.section`
  margin-top: 4rem;
`;

export const Heading = styled.h2`
  color: ${BLACK_COLOR_LIGHT};
`;

export const ViewAll = styled.h3`
  a {
    color: ${ACCENT_COLOR_LIGHT};
    text-decoration: none;
  }
`

export const Products = styled.div`
  margin-top: 2.4375rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 23.6rem);
  justify-content: space-between;
  gap: 5.375rem 0;
`;