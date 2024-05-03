import { render, screen, fireEvent } from '@testing-library/react';
import Button from './';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Hello</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('type')).toBe('button');
  });

  it('spreads custom attributes', () => {
    const clickFn = jest.fn();
    render(
      <Button data-foo="12" onClick={clickFn}>
        Hello
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button.getAttribute('data-foo')).toBe('12');

    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });

  it('renders an SVG element as children correctly', () => {
    const svgChild = <svg data-testid="svg-child" />;
    render(<Button>{svgChild}</Button>);

    const svgElement = screen.getByTestId('svg-child');

    expect(svgElement).toBeInTheDocument();
  });
});
