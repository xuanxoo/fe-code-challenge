import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox id="myCheckbox">My Checkbox</Checkbox>);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.getAttribute('type')).toBe('checkbox');
  });
  it('spreads custom attributes', () => {
    const changeFn = jest.fn();
    render(
      <Checkbox data-foo="12" id="myCheckbox" onChange={changeFn}>
        My Checkbox
      </Checkbox>,
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.getAttribute('data-foo')).toBe('12');

    fireEvent.click(checkbox);
    expect(changeFn).toHaveBeenCalledTimes(1);
  });
  it('check the input when label is clicked', () => {
    render(<Checkbox id="myCheckbox">My Checkbox</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByLabelText('My Checkbox');

    fireEvent.click(label);

    expect(checkbox.checked).toBe(true);
  });
});
