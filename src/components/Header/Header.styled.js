import styled from 'styled-components';

import { BLACK_COLOR_LIGHT, ACCENT_COLOR_LIGHT, DARK_GRAY_COLOR_LIGHT } from '../../assets/styles/vars';

export const StyledHeader = styled.div`
  color: ${BLACK_COLOR_LIGHT};
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 2.1875rem;
  line-height: 1.18;
  text-transform: uppercase;

  &::first-letter {
    color: ${ACCENT_COLOR_LIGHT};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const Separator = styled.div`
  height: 1rem;
  width: 1px;
  margin: 0 3rem;
  background-color: ${DARK_GRAY_COLOR_LIGHT};
`;

export const Icons = styled.ul`
  gap: 2.4375rem;
`;