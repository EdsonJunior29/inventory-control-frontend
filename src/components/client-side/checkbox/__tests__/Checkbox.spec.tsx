import { render, screen } from '@testing-library/react';
import { Checkbox } from '../Checkbox';
import React from 'react';

describe('CheckboxComponent', () => {
  it('should renders a checkbox element', () => {
    render(<Checkbox data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement.tagName).toBe('INPUT');
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<Checkbox data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toHaveClass('h-4');
    expect(checkboxElement).toHaveClass('focus:ring-2');
    expect(checkboxElement).toHaveClass('disabled:cursor-not-allowed');
    expect(checkboxElement).toHaveClass('disabled:opacity-50');
  });

  it('should merges additional className passed as props', () => {
    render(<Checkbox className="custom-class" data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toHaveClass('custom-class');
  });

  it('should renders a checkbox element with type checkbox', () => {
    render(<Checkbox data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toHaveAttribute('type', 'checkbox');
  });

  it('should renders a checkbox element with type radio', () => {
    render(<Checkbox type="radio" data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toHaveAttribute('type', 'radio');
  });

  it('should forwards other HTML props like id or data-*', () => {
    render(
      <Checkbox id="test-id" data-testid="checkbox" data-custom="custom" />
    );

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toHaveAttribute('id', 'test-id');
    expect(checkboxElement).toHaveAttribute('data-custom', 'custom');
  });

  it('should forward ref to the checkbox element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(ref.current).toBe(checkboxElement);
  });

  it('should be disabled when disabled prop is passed', () => {
    render(<Checkbox disabled data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toBeDisabled();
  });

  it('should be checked when checked prop is passed', () => {
    render(<Checkbox checked data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).toBeChecked();
  });

  it('should be checked when clicked', () => {
    render(<Checkbox data-testid="checkbox" />);

    const checkboxElement = screen.getByTestId('checkbox');

    expect(checkboxElement).not.toBeChecked();

    checkboxElement.click();

    expect(checkboxElement).toBeChecked();
  });
});
