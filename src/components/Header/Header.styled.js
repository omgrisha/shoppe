import styled from 'styled-components';

export const StyledHeader = styled.div`
  color: ${({ theme }) => theme.colors.light.black};
  
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
    color: ${({ theme }) => theme.colors.light.accent};
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
  background-color: ${({ theme }) => theme.colors.light.darkGray};
`;

export const Icons = styled.ul`
  gap: 2.4375rem;
`;