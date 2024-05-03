import styled from 'styled-components';

export const Text = styled.label`
  padding-right: 8px;
  color: var(--colors-darkBlue);
  ${({ theme }) => theme.typography?.bodySmall};
  cursor: inherit;
`;

export const WrapperCheckbox = styled.div`
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--colors-blank);
  margin: 0;
  display: flex;
  align-items: center;
  cursor: inherit;
  flex-direction: row-reverse;
`;

export const Input = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 14px;
  height: 14px;
  border: 1px solid var(--colors-irisBlue-lighter);
  border-radius: 2px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: inherit;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--colors-irisBlue);
  }

  &:checked::before {
    transform: scale(1);
  }
  &:focus {
    border-color: var(--colors-irisBlue);
    outline-width: 0;
  }
`;

export const Wrapper = styled.div`
  border-radius: 12px;
  border: 1.5px solid var(--colors-irisBlue-lighter);
  padding: 10px;
  cursor: pointer;

  &:hover,
  &:hover ${WrapperCheckbox} {
    background-color: var(--colors-linkWater);
  }

  &:hover ${Input}:not(:checked) {
    border-color: var(--colors-irisBlue);
  }

  &:focus-within {
    box-shadow: 0 0 0 2.5px var(--colors-irisBlue);
    outline-style: auto;
    color: var(--colors-irisBlue-lighter);
  }
  &:focus-within ${Input} {
    border-color: var(--colors-irisBlue);
  }
`;
