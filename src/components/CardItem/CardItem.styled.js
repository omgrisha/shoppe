import styled from "styled-components";

export const StyledCardItem = styled.a`
  display: block;
  width: ${({ $width }) => $width};
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
  background-color: ${({ theme }) => theme.light.accent};
  color: ${({ theme }) => theme.light.white};
  border-radius: 0.25rem;
`;

export const Details = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.light.black};
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.light.accent};

  &:before {
    content: '$';
    display: inline-block;
    margin-right: 0.5ch;
  }
`;