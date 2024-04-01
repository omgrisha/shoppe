import styled from 'styled-components';

import { BLACK_COLOR_LIGHT, ACCENT_COLOR_LIGHT, DARK_GRAY_COLOR_LIGHT } from '../../assets/styles/vars';

const StyledHeader = styled.div`
  color: ${BLACK_COLOR_LIGHT};
  
  a {
    color: inherit;
    text-decoration: none;
  }

  &,
  .header__right-part,
  .header__nav-list,
  .header__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo {
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 2.1875rem;
    line-height: 1.18;
  }

  .header__logo::first-letter {
    color: ${ACCENT_COLOR_LIGHT};
  }

  .header__nav-list {
    gap: 4rem;
  }

  .header__separator {
    height: 1rem;
    width: 1px;
    margin: 0 3rem;
    background-color: ${DARK_GRAY_COLOR_LIGHT};
  }

  .header__icons {
    gap: 2.4375rem;
  }
`;

export default StyledHeader;