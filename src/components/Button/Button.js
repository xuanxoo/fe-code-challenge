import PropTypes from 'prop-types';
import SROnly from 'components/SROnly';
import { ButtonStyled, Text, Loading } from './Button.styled';

export default function Button({ children, isLoading, ...props }) {
  return (
    <ButtonStyled type="button" {...props}>
      <Text isLoading={isLoading}>{children}</Text>
      {isLoading && (
        <>
          <SROnly aria-live="assertive">Loading</SROnly>
          <Loading />
        </>
      )}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
