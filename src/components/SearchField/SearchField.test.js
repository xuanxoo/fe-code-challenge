import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchField from './SearchField';

describe('SearchField', () => {
  it('renders without errors', () => {
    render(<SearchField onSearch={() => {}} onClearResults={() => {}} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('spreads custom attributes', () => {
    render(<SearchField data-foo="12" onSearch={() => {}} onClearResults={() => {}} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement.getAttribute('data-foo')).toBe('12');
  });

  it('calls onSearch callback with the entered value when input value changes', async () => {
    const onSearchMock = jest.fn();
    const clearResultsMock = jest.fn();
    render(<SearchField onSearch={onSearchMock} onClearResults={clearResultsMock} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    await waitFor(() => expect(onSearchMock).toHaveBeenCalledWith('test'));
  });
  it('calls onClearResults callback with when input value is empty', async () => {
    const onClearResultsMock = jest.fn();
    render(<SearchField onSearch={() => {}} onClearResults={onClearResultsMock} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '' } });

    await waitFor(() => expect(onClearResultsMock).toHaveBeenCalled());
  });
});
