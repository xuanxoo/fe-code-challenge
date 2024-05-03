import styled, { css, keyframes } from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;

  background: var(--colors-irisBlue);
  color: var(--colors-blank);

  &:focus {
    box-shadow: 0 0 0 4px var(--colors-irisBlue);
    outline-style: auto;
  }
`;

export const Text = styled.span`
  transition: color 250ms;
  display: flex;
  align-items: center;

  svg {
    width: 1.2em;
    display: inline;
    margin-right: 10px;
    vertical-align: bottom;
    fill: var(--colors-blank);
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      color: transparent;
      svg {
        fill: transparent;
      }
    `}
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.span`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  border-width: 2px;
  border-color: inherit;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-radius: 50%;
  animation: ${spin} 0.45s linear infinite;
`;
