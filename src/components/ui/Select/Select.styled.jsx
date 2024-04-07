import styled from 'styled-components';
import { css } from 'styled-components';
import {
  GRAY_COLOR_LIGHT,
  DARK_GRAY_COLOR_LIGHT,
  LIGHT_GRAY_COLOR_LIGHT,
} from './../../../assets/styles/vars';

export const StyledSelect = styled.div`
  svg {
    transition: transform 0.2s ease-in-out;
  }
  position: relative;
  width: 16.25rem;
  padding: 1rem 0.7rem;
  border-radius: 4px;

  border: 0.0625rem solid;
  border-color: ${GRAY_COLOR_LIGHT};
  &:hover,
  &:active,
  &:focus {
    outline: none;
    border-color: ${DARK_GRAY_COLOR_LIGHT};
  }

  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  font-size: 0.875rem;
  font-weight: 500;
`;

export const StyledOption = styled.div`
  width: 100%;
  padding: 0.8rem 0.7rem;

  background-color: ${({ $selected }) =>
    $selected ? `${LIGHT_GRAY_COLOR_LIGHT} !important;` : 'none;'}

  transition: background-color 0.2s ease-in-out;

  &[disabled] {
    background-color: #e7e7e7;
    color: #9d9d9d;

    cursor: default;
    user-select: none;

    &:hover,
    &:focus {
      background-color: #e7e7e7 !important;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-color: ${GRAY_COLOR_LIGHT};
  }

  &:hover,
  &:focus {
    background-color: ${LIGHT_GRAY_COLOR_LIGHT};
  }
`;

export const StyledOptions = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  position: absolute;
  z-index: 99;
  left: 0;
  top: auto;

  border: 0.0625rem solid;
  border-color: ${GRAY_COLOR_LIGHT};

  transition: all 0.2s ease-in;
  font-weight: 400;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          visibility: visibility;
          opacity: 1;
          transform: none;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: translateY(-0.5rem);
        `};
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;

  /* select title */
  > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
