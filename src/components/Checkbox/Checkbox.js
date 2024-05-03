import PropTypes from 'prop-types';
import { Wrapper, Text, Input, WrapperCheckbox } from './Checkbox.styled';

export default function Checkbox({ id, children, ...props }) {
  return (
    <Wrapper>
      <WrapperCheckbox>
        <Input id={id} type="checkbox" {...props} />
        <Text htmlFor={id}>{children}</Text>
      </WrapperCheckbox>
    </Wrapper>
  );
}
Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
