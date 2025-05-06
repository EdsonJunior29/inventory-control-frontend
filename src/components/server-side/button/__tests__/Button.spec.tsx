import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import React from 'react';

describe('ButtonComponent', () => {
  it('should renders a button element', () => {
    render(<Button>Test</Button>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('BUTTON');
    expect(element).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<Button>Test</Button>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('inline-flex');
    expect(element).toHaveClass('items-center');
    expect(element).toHaveClass('justify-center');
    expect(element).toHaveClass('gap-2');
  });

  it('should merges additional className passed as props', () => {
    render(<Button className="custom-class">Test</Button>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should adds variant className', () => {
    render(<Button variant="outline">Test</Button>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('border');
    expect(element).toHaveClass('border-input');
    expect(element).toHaveClass('bg-background');
  });

  it('should adds size className', () => {
    render(<Button size="lg">Test</Button>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('h-10');
    expect(element).toHaveClass('rounded-md');
    expect(element).toHaveClass('px-8');
  });

  it('should asChild prop renders a span element', () => {
    render(
      <Button asChild>
        <span>Test</span>
      </Button>
    );

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('SPAN');
    expect(element).toBeInTheDocument();
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <Button id="test-id" data-testid="test-id" data-custom="custom-data">
        Test
      </Button>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-testid', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Test</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe('Test');
  });

  it('should be disabled', () => {
    render(<Button disabled>Test</Button>);

    const element = screen.getByText('Test');

    expect(element).toBeDisabled();
  });

  it('should be onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test</Button>);

    /**Essa são duas forma que posso simular o click no botão */
    screen.getByText('Test').click();
    //const element = screen.getByText('Test');
    //element.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be type submit', () => {
    render(<Button type="submit">Test</Button>);

    const element = screen.getByText('Test');

    expect(element).toHaveAttribute('type', 'submit');
  });
});
