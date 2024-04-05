import styled from "styled-components";

import { ACCENT_COLOR_LIGHT, BLACK_COLOR_LIGHT, WHITE_COLOR_LIGHT } from '../../assets/styles/vars';

export const StyledCardItem = styled.a`
  display: block;
  text-decoration: none;

  transition: filter 0.15s ease-in;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Badge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.125rem 0.5rem;
  background-color: ${ACCENT_COLOR_LIGHT};
  color: ${WHITE_COLOR_LIGHT};
  border-radius: 0.25rem;
`;

export const Details = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  color: ${BLACK_COLOR_LIGHT};
`;

export const Price = styled.div`
  color: ${ACCENT_COLOR_LIGHT};

  &:before {
    content: '$';
    display: inline-block;
    margin-right: 0.5ch;
  }
`;