import styled from 'styled-components';

import { BLACK_COLOR_LIGHT, DARK_GRAY_COLOR_LIGHT, GRAY_COLOR_LIGHT } from '../../assets/styles/vars';

export const StyledFooter = styled.footer`
  margin-top: 15.625rem;
  border-top: 1px solid ${GRAY_COLOR_LIGHT};
  padding-top: 1.5rem;
  color: ${DARK_GRAY_COLOR_LIGHT};
  
  a {
    color: inherit;    
    text-decoration: none;
  }

  span {
    font-weight: bold;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 3.125rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 2.5625rem;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  max-width: 24.75rem;
  border-bottom: 1px solid ${BLACK_COLOR_LIGHT};
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.8125rem 0;
  font-size: inherit;
  font-family: inherit;
  border: none;
  outline: none;
`;

export const Submit = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Icons = styled.ul`
  display: flex;
  gap: 1.875rem;
`;