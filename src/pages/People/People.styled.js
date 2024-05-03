import styled from 'styled-components';
import Text from 'components/Text';

export const Container = styled.main`
  margin: 40px auto;
  padding: 0 16px;
  width: 100%;
  max-width: var(--layout-width);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Counter = styled(Text)`
  color: var(--colors-bayoux);
  padding-left: 8px;
  ${({ theme }) => theme.typography?.bodySmall};
`;
