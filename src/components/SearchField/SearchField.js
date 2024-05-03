import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, Icon } from './SearchField.styled';

export default function SearchField({ onSearch, onClearResults, ...props }) {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (term !== '') {
      onSearch(term);
    } else {
      onClearResults();
    }
  }, [term]);

  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        name="search"
        onChange={(e) => setDebouncedTerm(e.target.value)}
        value={debouncedTerm}
        {...props}
      ></Input>
    </Wrapper>
  );
}
SearchField.propTypes = {
  onSearch: PropTypes.func,
  onClearResults: PropTypes.func,
};
