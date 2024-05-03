import styled from 'styled-components';
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

export const Wrapper = styled.div`
  width: 200px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(IconSearch)`
  width: 20px;
  margin-right: 10px;
  vertical-align: bottom;
  fill: var(--colors-lynch);
  position: absolute;
  margin: 8px 0 0 10px;
  cursor: inherit;
`;

export const Input = styled.input`
  border: 1px solid var(--colors-lynch);
  border-radius: 25px;
  height: 34px;
  min-width: 220px;
  ${({ theme }) => theme.typography?.bodySmall};
  color: var(--colors-darkBlue);
  padding: 12px 20px 12px 40px;
  cursor: inherit;

  &:focus {
    box-shadow:
      0 0 0 1px var(--colors-blank),
      0 0 0 3px var(--colors-lynch);
    outline-width: 0;
  }
`;
